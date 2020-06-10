# Component Scaffold utility

This package provides a simple utility to speed up the creation of new components. It also helps to enforce consistency across the codebase by providing templated files. At this stage the utility provides scaffold only for react components.

## Install

`yarn add -D @transferwise/components-scaffold`
or
`npm install --save-dev @transferwise/components-scaffold`

# Usage

To use the scaffold utils in your project please add the following script to your package.json

`"your-script-command-name": "scaffold-react-component"`

When running `your-script-command-name` you'll be prompted to a series of questions on your CLI. Once everyhting has been answered your component's folder will be created under the path you specified.
