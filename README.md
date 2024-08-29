# NXStencil

This repo contains the code for reproducing two issues with the `@stencil/react-output-target` package in an NX workspace.

## Issue 1: `@stencil/react-output-target` properties are not available when the component calls `connectedCallback`.

When using the library react output target, the properties are not available when the component calls `connectedCallback`, they are undefined and becomes available when calling `componentWillLoad`. To see the issue:

1. Clone the repo.
2. Run `npm ci`.
3. Build the stencil core library by running `npx nx run core-react:build` (this will build the stencil core library and the react output target).
4. Run the `react-demo` app by running `npx nx run react-demo:serve`.
5. Open the browser and check the console. You will see that the `first`, `middle` and `last` properties are `undefined` when the component calls `connectedCallback` but are available when calling `componentWillLoad`.

> [!NOTE]
> You can check the code in the `packages/core/src/components/my-component/my-component.tsx` file.

~~## Issue 2: `@stencil/react-output-target` generated components.ts using absolute paths.~~ ✅ Solved in [this PR](https://github.com/ionic-team/stencil-ds-output-targets/pull/461)

~~The `@stencil/react-output-target` package generates the `components.ts` file with absolute paths. This causes issues when the project is built in a monorepo environment like NX. To see the issue:~~

~~1. Clone the repo.~~
~~2. Remove `patch-package` from the `postinstall` script in the `package.json` file (*this is to avoid the `@stencil/react-output-target` package from being patched with a workaround for the issue*).~~
~~3. Run `npm ci`.~~
~~3. Build the stencil core library by running `npx nx run core-react:build` (this will build the stencil core library and the react output target).~~
~~5. Check the generated `components.ts` file in the `packages/core-react/src` folder.~~

## Issue 3: `@stencil/react-output-target` SSR target renders the component internal shadow DOM twice

When using the library react output target with the SSR target, the component internal shadow DOM is rendered twice. To see the issue:

1. Clone the repo.
2. Run `npm ci`.
3. Build the stencil core library by running `npx nx run core-react:build` (this will build the stencil core library and the react output(s) target, SSR target included).
4. Run the `react-ssr-demo` app by running `npx nx dev nextjs-demo`.
5. Open the browser, you will see that the `Hello, World! I'm Stencil React SSR` component rendered twice.
6. Inspect the component to see the internal shadow DOM rendered twice.
