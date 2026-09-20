type BuildInfo = { builtAt: string; commit: string };

function readBuildInfo(): BuildInfo {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require('./generated/build-info.json') as BuildInfo;
  } catch {
    return { builtAt: new Date().toISOString(), commit: '' };
  }
}

export const BUILD_INFO = readBuildInfo();
