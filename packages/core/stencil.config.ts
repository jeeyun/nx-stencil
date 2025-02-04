import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { resolve } from 'path';

const customElementsDir = 'dist/components';

const resolvePath = (relativePath: string): string =>
  resolve(__dirname, relativePath).replace(/\\/g, '/');

export const config: Config = {
  namespace: 'core',
  buildDist: true,
  enableCache: true,
  cacheDir: resolvePath('../../.stencil'),
  taskQueue: 'async',
  sourceMap: true,
  /* -------------------------------------------------------------------------- */
  /*                                   Targets                                  */
  /* -------------------------------------------------------------------------- */
  outputTargets: [
    { type: 'dist' },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'single-export-module',
      dir: customElementsDir,
      minify: true,
    },
    { type: 'dist-hydrate-script', dir: 'dist/hydrate' },
    { type: 'docs-readme' },
    { type: 'docs-vscode', file: 'custom-elements.json' },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    react({
      outDir: resolvePath('../core-react/src/'),
      customElementsDir,
    }),
    react({
      outDir: resolvePath('../core-react/ssr'),
      hydrateModule: '@ui/core/dist/hydrate',
      customElementsDir,
    }),
  ],
  /* -------------------------------------------------------------------------- */
  /*                                   Extras                                   */
  /* -------------------------------------------------------------------------- */
  extras: {
    enableImportInjection: true,
    experimentalScopedSlotChanges: true,
    experimentalSlotFixes: true,
  },
};
