import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { resolve } from 'path';

const customElementsDir = 'dist/components';

export const config: Config = {
  namespace: 'core',
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
      outDir: resolve(__dirname, '../core-react/src/').replace(/\\/g, '/'),
      customElementsDir,
    }),
    react({
      outDir: resolve(__dirname, '../core-react/ssr').replace(/\\/g, '/'),
      hydrateModule: '@ui/core/dist/hydrate',
      customElementsDir,
    }),
  ],
  /* -------------------------------------------------------------------------- */
  /*                                   Extras                                   */
  /* -------------------------------------------------------------------------- */
  extras: {
    experimentalImportInjection: true,
    experimentalSlotFixes: true,
  },
};
