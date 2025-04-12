# Publishing Guide for Modern React UI Library

This document provides instructions on how to prepare and publish this UI library to npm for use in your scripts and applications.

## Preparing for Publishing

1. **Create a new repository on GitHub**
   - Push the code to your new repository
   - Make sure all the GitHub-specific files are included (.gitignore, LICENSE, README.md, etc.)

2. **Configure package.json**
   - Once you've moved the code to your own repository, update the package.json:

```json
{
  "name": "modern-react-ui",
  "version": "0.1.0",
  "description": "A beautiful, accessible, and customizable UI component library for React applications",
  "author": "Your Name",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/modern-react-ui.git"
  },
  "keywords": [
    "react",
    "ui",
    "components",
    "library",
    "typescript",
    "tailwind"
  ],
  "main": "dist/index.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "build:lib": "rollup -c",
    "prepublishOnly": "npm run build:lib"
  },
  "peerDependencies": {
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0"
  },
  "dependencies": {
    // Keep the essential dependencies
    "@radix-ui/react-accordion": "^1.2.1",
    // ... other UI-related dependencies
    "tailwind-merge": "^2.5.4",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    // Development dependencies
  }
}
```

3. **Create a rollup.config.js file**
   - Add a rollup configuration for building the library:

```javascript
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default [
  {
    input: 'client/src/lib/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      }),
      terser(),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
];
```

4. **Install additional dev dependencies**
   - You'll need to install rollup and its plugins:
   
```bash
npm install --save-dev rollup @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-typescript rollup-plugin-dts rollup-plugin-peer-deps-external rollup-plugin-postcss rollup-plugin-terser
```

## Publishing to npm

1. **Create an npm account** if you don't have one
   - Visit [npmjs.com](https://www.npmjs.com/) and sign up

2. **Login to npm from your terminal**
```bash
npm login
```

3. **Build the library**
```bash
npm run build:lib
```

4. **Publish the package**
```bash
npm publish
```

For future updates, remember to increment the version number in package.json before publishing.

## Using the Library in Your Scripts

Once published, you can use the library in your scripts like this:

```bash
npm install modern-react-ui
```

```jsx
import React from 'react';
import { Button, ThemeProvider } from 'modern-react-ui';

function App() {
  return (
    <ThemeProvider>
      <div className="p-4">
        <Button variant="default">Click Me</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

## Local Development Usage

If you want to use the library locally before publishing, you can use npm link:

1. In the library project directory:
```bash
npm run build:lib
npm link
```

2. In your application project:
```bash
npm link modern-react-ui
```

This creates a symbolic link to your local library package.

## Including Tailwind CSS

The library uses Tailwind CSS. Make sure your consuming project has Tailwind CSS set up and include these lines in your tailwind.config.js:

```javascript
module.exports = {
  content: [
    // Your project paths
    './node_modules/modern-react-ui/**/*.{js,ts,jsx,tsx}',
  ],
  // ...rest of your config
};
```