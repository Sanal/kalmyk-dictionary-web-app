# Kalmyk Dictionary Web App

## Node.js

The engine of the app is Node.js LTS Fermium (v14.x.x).

## Package manager

Yarn 1.22.19 (classic).

## React

The app uses Next.js framework based on React 17.

## Requirements

- Node Version Manager (NVM): [Mac and Linux](https://github.com/nvm-sh/nvm) / [Windows](https://github.com/coreybutler/nvm-windows)

## Development

Before starting development you need to successfully run following commands:

```bash
nvm install
```

```bash
yarn
```

To start the app on your local machine run:

```bash
yarn dev
```

If you need to start the app on a specific port you may pass an argument `-p`, e.g:

```bash
yarn dev -- -p 8080
```

## Commitlint

You can find commit message rules in `commitlint.config.js` file.

## Storybook

To browse components library run

```bash
yarn storybook
```
