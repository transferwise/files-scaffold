# Component Scaffold utility

This package provides a simple utility to speed up the creation of new templated files. It also helps to enforce consistency across ypur codebase by forcing developers to use the templated files that have been specified.

## Install

`yarn add -D @transferwise/files-scaffold`
or
`npm install --save-dev @transferwise/files-scaffold`

# Usage

To use the scaffold utils in your project please add the following script to your package.json

`"your-script-command-name": "files-scaffold"`

## Templates

In order to use `files-scaffold` command you need to specify a `.scaffold-templates` directory

In this directory you need to add your templates that files-scaffold is going to use to generate your files.

A template files is a `js` file that exports an object. Currently the template object supports the following properties

```
module.export {
    type: 'your',
    path: 'packages/components/src',
    ext: 'js',
    createDir: true,
    name: (name) => capitalizeFirstLetter(name),
    template: (name) => `import React from "react";
import Types from "prop-types";
...`
}
```

### Templates Properties

|           | type     | description                                                                                                                                 |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| type      | string   | Used mostly for the success message to identify the newly created files                                                                     |
| path      | string   | Path relative to the package.json that contains your `"your-script-command-name"` Where your file is going to be created                    |
| ext       | string   | The extension to be used for your file                                                                                                      |
| createDir | bool     | This determines if the file has to be added as single file or it needs to be created inside a directory with the name decided in the prompt |
| name      | function | The name of the file. This function accepts the name chosen in the prompt                                                                   |
| template  | function | The content of your file. This function accepts the name chosen in the prompt                                                               |

When running `your-script-command-name` you'll be prompted to a series of questions on your CLI. Once everyhting has been answered your files will be created under following the path you specificed inside your templates.
