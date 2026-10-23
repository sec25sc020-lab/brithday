# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Deploying to Vercel

This is a frontend-only React app built with Vite. It does not require a backend or environment variables.

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

For automatic deployments from GitHub, open the Vercel dashboard, choose **Add New → Project**, import this repository, and keep the detected Vite settings above. Each push to the connected production branch will trigger a new deployment.

To deploy directly from this folder, install Node.js, open a terminal in the project directory, then run:

```sh
npx vercel
```

Sign in when prompted and accept the detected Vite settings. After the preview deployment is ready, publish it with:

```sh
npx vercel --prod
```

The `vercel.json` rewrite keeps the single-page app entry point available on refresh and direct navigation.
