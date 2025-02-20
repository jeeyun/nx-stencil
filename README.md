# NXStencil

This repo contains the code for reproducing an issue with the `@stencil/react-output-target` package in an NX workspace.

## Issue: `@stencil/react-output-target` SSR target changes the delegatesFocus to false

When using the library react output target with the SSR target, the component's shadowRoot.delegateFocus is changed to false. To see the issue:

1. Clone the repo.
2. Run `npm ci`.
3. Build the stencil core library by running `npx nx run core-react:build` (this will build the stencil core library and the react output(s) target, SSR target included).
4. Run the `react-ssr-demo` app by running `npx nx dev nextjs-demo`.
5. Open the browser, inspect `My Custom Button` component. 
6. Its shadowRoot.delegatesFocus is changed to false.
7. For comparison, you can run the non-ssr version of React app by running `npx nx dev react-demo`
8. Open the browser, inspect `My Custom Button` component. 
9. Its shadowRoot.delegatesFocus is true, which is the expected correct behavior.
