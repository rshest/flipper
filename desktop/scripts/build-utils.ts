/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import Metro from 'metro';
import tmp from 'tmp';
import path from 'path';
import fs from 'fs-extra';
import {spawn} from 'promisify-child-process';
import {getWatchFolders, runBuild} from 'flipper-pkg-lib';
import getAppWatchFolders from './get-app-watch-folders';
import {
  getSourcePlugins,
  getPluginSourceFolders,
  BundledPluginDetails,
  InstalledPluginDetails,
} from 'flipper-plugin-lib';
import {
  appDir,
  staticDir,
  defaultPluginsDir,
  babelTransformationsDir,
} from './paths';

const {version} = require('../package.json');

const dev = process.env.NODE_ENV !== 'production';

// For insiders builds we bundle top 5 popular device plugins,
// plus top 10 popular "universal" plugins enabled by more than 100 users.
const hardcodedPlugins = new Set<string>([
  // Popular device plugins
  'DeviceLogs',
  'CrashReporter',
  'MobileBuilds',
  'Hermesdebuggerrn',
  'React',
  // Popular client plugins
  'Inspector',
  'Network',
  'AnalyticsLogging',
  'GraphQL',
  'UIPerf',
  'MobileConfig',
  'Databases',
  'FunnelLogger',
  'Navigation',
  'Fresco',
  'Preferences',
]);

export function die(err: Error) {
  console.error('Script termnated.', err);
  process.exit(1);
}

export async function prepareDefaultPlugins(isInsidersBuild: boolean = false) {
  console.log(
    `⚙️  Preparing default plugins (isInsidersBuild=${isInsidersBuild})...`,
  );
  await fs.emptyDir(defaultPluginsDir);
  const forcedDefaultPluginsDir = process.env.FLIPPER_DEFAULT_PLUGINS_DIR;
  if (forcedDefaultPluginsDir) {
    console.log(
      `⚙️  Copying the provided default plugins dir "${forcedDefaultPluginsDir}"...`,
    );
    await fs.copy(forcedDefaultPluginsDir, defaultPluginsDir, {
      recursive: true,
      overwrite: true,
      dereference: true,
    });
    console.log('✅  Copied the provided default plugins dir.');
    await generateDefaultPluginEntryPoints([]); // calling it here just to generate empty indexes
  } else {
    const sourcePlugins = process.env.FLIPPER_NO_DEFAULT_PLUGINS
      ? []
      : await getSourcePlugins();
    const defaultPlugins = sourcePlugins
      // we only include predefined set of plugins into insiders release
      .filter((p) => !isInsidersBuild || hardcodedPlugins.has(p.id));
    if (process.env.FLIPPER_NO_BUNDLED_PLUGINS) {
      await buildDefaultPlugins(defaultPlugins);
      await generateDefaultPluginEntryPoints([]); // calling it here just to generate empty indexes
    } else {
      await generateDefaultPluginEntryPoints(defaultPlugins);
    }
  }
  console.log('✅  Prepared default plugins.');
}

async function generateDefaultPluginEntryPoints(
  defaultPlugins: InstalledPluginDetails[],
) {
  console.log(
    `⚙️  Generating entry points for ${defaultPlugins.length} bundled plugins...`,
  );
  const bundledPlugins = defaultPlugins.map(
    (p) =>
      ({
        ...p,
        isBundled: true,
        version: p.version === '0.0.0' ? version : p.version,
        flipperSDKVersion:
          p.flipperSDKVersion === '0.0.0' ? version : p.flipperSDKVersion,
        dir: undefined,
        entry: undefined,
      } as BundledPluginDetails),
  );
  await fs.writeJSON(
    path.join(defaultPluginsDir, 'bundled.json'),
    bundledPlugins,
  );
  const pluginRequres = bundledPlugins
    .map((x) => `  '${x.name}': require('${x.name}')`)
    .join(',\n');
  const generatedIndex = `
  /* eslint-disable */
  // THIS FILE IS AUTO-GENERATED by function "generateDefaultPluginEntryPoints" in "build-utils.ts".
  export default {\n${pluginRequres}\n} as any
  `;
  await fs.ensureDir(path.join(appDir, 'src', 'defaultPlugins'));
  await fs.writeFile(
    path.join(appDir, 'src', 'defaultPlugins', 'index.tsx'),
    generatedIndex,
  );
  console.log('✅  Generated bundled plugin entry points.');
}

async function buildDefaultPlugins(defaultPlugins: InstalledPluginDetails[]) {
  if (process.env.FLIPPER_NO_REBUILD_PLUGINS) {
    console.log(
      `⚙️  Including ${
        defaultPlugins.length
      } plugins into the default plugins list. Skipping rebuilding because "no-rebuild-plugins" option provided. List of default plugins: ${defaultPlugins
        .map((p) => p.id)
        .join(', ')}`,
    );
  }
  for (const plugin of defaultPlugins) {
    try {
      if (!process.env.FLIPPER_NO_REBUILD_PLUGINS) {
        console.log(
          `⚙️  Building plugin ${plugin.id} to include it into the default plugins list...`,
        );
        await runBuild(plugin.dir, dev);
      }
      await fs.ensureSymlink(
        plugin.dir,
        path.join(defaultPluginsDir, plugin.name),
        'junction',
      );
    } catch (err) {
      console.error(`✖ Failed to build plugin ${plugin.id}`, err);
    }
  }
}

const minifierConfig = {
  minifierPath: require.resolve('metro-minify-terser'),
  minifierConfig: {
    // see: https://www.npmjs.com/package/terser
    keep_fnames: true,
    module: true,
    warnings: true,
    mangle: false,
    compress: false,
  },
};

async function compile(
  buildFolder: string,
  projectRoot: string,
  watchFolders: string[],
  entry: string,
) {
  const out = path.join(buildFolder, 'bundle.js');
  const sourceMapUrl = dev ? 'bundle.map' : undefined;
  await Metro.runBuild(
    {
      reporter: {update: () => {}},
      projectRoot,
      watchFolders,
      serializer: {},
      transformer: {
        babelTransformerPath: path.join(
          babelTransformationsDir,
          'transform-app',
        ),
        ...minifierConfig,
      },
      resolver: {
        resolverMainFields: ['flipperBundlerEntry', 'module', 'main'],
        blacklistRE: /\.native\.js$/,
        sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json', 'mjs', 'cjs'],
      },
    },
    {
      dev,
      minify: !dev,
      resetCache: !dev,
      sourceMap: dev,
      sourceMapUrl,
      entry,
      out,
    },
  );
}

export async function compileRenderer(buildFolder: string) {
  console.log(`⚙️  Compiling renderer bundle...`);
  const watchFolders = [
    ...(await getAppWatchFolders()),
    ...(await getPluginSourceFolders()),
  ];
  try {
    await compile(
      buildFolder,
      appDir,
      watchFolders,
      path.join(appDir, 'src', 'init.tsx'),
    );
    console.log('✅  Compiled renderer bundle.');
  } catch (err) {
    die(err);
  }
}

export async function compileMain() {
  const out = path.join(staticDir, 'main.bundle.js');
  process.env.FLIPPER_ELECTRON_VERSION =
    require('electron/package.json').version;
  console.log('⚙️  Compiling main bundle...');
  try {
    const config = Object.assign({}, await Metro.loadConfig(), {
      reporter: {update: () => {}},
      projectRoot: staticDir,
      watchFolders: await getWatchFolders(staticDir),
      transformer: {
        babelTransformerPath: path.join(
          babelTransformationsDir,
          'transform-main',
        ),
        ...minifierConfig,
      },
      resolver: {
        sourceExts: ['tsx', 'ts', 'js'],
        resolverMainFields: ['flipperBundlerEntry', 'module', 'main'],
        blacklistRE: /\.native\.js$/,
      },
    });
    await Metro.runBuild(config, {
      platform: 'web',
      entry: path.join(staticDir, 'main.ts'),
      out,
      dev,
      minify: !dev,
      sourceMap: dev,
      resetCache: !dev,
    });
    console.log('✅  Compiled main bundle.');
  } catch (err) {
    die(err);
  }
}
export function buildFolder(): Promise<string> {
  // eslint-disable-next-line no-console
  console.log('Creating build directory');
  return new Promise<string>((resolve, reject) => {
    tmp.dir({prefix: 'flipper-build-'}, (err, buildFolder) => {
      if (err) {
        reject(err);
      } else {
        resolve(buildFolder);
      }
    });
  }).catch((e) => {
    die(e);
    return '';
  });
}
export function getVersionNumber(buildNumber?: number) {
  let {version} = require('../package.json');
  if (buildNumber) {
    // Unique build number is passed as --version parameter from Sandcastle
    version = [...version.split('.').slice(0, 2), buildNumber].join('.');
  }
  return version;
}

// Asynchronously determine current mercurial revision as string or `null` in case of any error.
export function genMercurialRevision(): Promise<string | null> {
  return spawn('hg', ['log', '-r', '.', '-T', '{node}'], {encoding: 'utf8'})
    .then(
      (res) =>
        (res &&
          (typeof res.stdout === 'string'
            ? res.stdout
            : res.stdout?.toString())) ||
        null,
    )
    .catch(() => null);
}