#!/usr/bin/env bash

BASEDIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )/.." && pwd )"
NUM=$(unzip -l "$BASEDIR"/android/build/outputs/aar/android-debug.aar | grep -c libevent_core)

if (( NUM >= 4 )); then
    echo "Found $NUM instances of libevent_core. Looks good."
    exit 0
else
    unzip -l "$BASEDIR"/android/build/outputs/aar/android-debug.aar | grep libevent_core
    echo "Expected 4 but found $NUM libevent_core.so files. Expecting one for each architecture. See #3395 for details."
    exit 1
fi