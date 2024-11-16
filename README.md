# Vite Project Templates

Custom project templates using Vite, pre-configured with ESLint, Prettier, optionally TypeScript and Tailwind CSS, and a clean folder structure for fast project setup.

There are 7 branches, containing different templates for different tools.
The `master` branch contains the `react-ts-tailwind` template.

## How to Use

- Clone the necessary branch and install the packages.
- I recommend using [degit](https://github.com/Rich-Harris/degit) for cloning.

### Steps:

1. Install degit globally (only required once):

   ```
   npm install -g degit
   ```

2. Create a root directory for your project, navigate to it, and run the following command to clone the template:

   ```
   degit https://github.com/DarkstarXDD/vite-templates
   ```

   OR run one of the following commands in the [branches](#branches) section to get a different template from a branch.

3. After cloning, install the project dependencies:

   ```
   npm install
   ```

### Branches:

Optionally there are multiple branches. Each branch has a different template.

- Vanilla JavaScript

  ```
  degit https://github.com/DarkstarXDD/vite-templates#vanilla-js
  ```

- Vanilla TypeScript

  ```
  degit https://github.com/DarkstarXDD/vite-templates#vanilla-ts
  ```

- Vanilla TypeScript with Tailwind

  ```
  degit https://github.com/DarkstarXDD/vite-templates#vanilla-ts-tailwind
  ```

- React with JavaScript

  ```
  degit https://github.com/DarkstarXDD/vite-templates#react-js
  ```

- React with TypeScript

  ```
  degit https://github.com/DarkstarXDD/vite-templates#react-ts
  ```

- React with JavaScript and Tailwind

  ```
  degit https://github.com/DarkstarXDD/vite-templates#react-js-tailwind
  ```

- React with TypeScript and Tailwind

  ```
  degit https://github.com/DarkstarXDD/vite-templates#react-ts-tailwind
  ```

## ESLint Plugins Used

- @eslint/js
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- eslint-plugin-jsx-a11y
