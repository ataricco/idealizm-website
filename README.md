current toolstack: npm and NodeJS, NextJS, TailwindCSS (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

after, 

```bash
npm install next@latest react@latest react-dom@latest
```

*note: you may have to revert react version to 19.1.0. if you do:

```bash
npm uninstall react react-dom
npm install react@19.0.1 react-dom@19.0.1
```
which installs next and the general react environment (https://nextjs.org/docs/app/getting-started/installation).

Next install the carousel
```
npm install react-multi-carousel
```

then clone the repo and run 

```bash
npm i
```
which will install all necessary dependencies.

then install tailwindcss (https://tailwindcss.com/docs/installation/tailwind-cli)

```bash
npm run dev
```
to start the page
