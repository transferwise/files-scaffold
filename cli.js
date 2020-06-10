#!/usr/bin/env node

const prompt = require('prompt');
const { join } = require('path');
const fs = require('fs');
const { capitalizeFirstLetter, message } = require('./utils/index.js');

const templateDirectory = __dirname + '/templates';
const fileFootprint = [];

function rreaddirSync(dir) {
  fs.readdirSync(dir)
    .map((f) => join(dir, f))
    .forEach((file) => {
      const templateFile = require(file);
      fileFootprint.push({ ...templateFile });
    });
}

rreaddirSync(templateDirectory);

async () => {
  await fs.readdir(templateDirectory, function (err, files) {
    //handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }

    files.forEach(function (file) {
      var templateFile = require(`${templateDirectory}/${file}`);

      fileFootprint.push({ ...templateFile });
    });
  });
};

//
// Start the prompt
//
prompt.start();

//
// Get the components infos
//
const schema = {
  properties: {
    name: {
      pattern: /^[A-Za-z\s]+$/,
      message: 'Please insert a component name: Only letters allowed',
      required: true,
      default: 'test',
    },
  },
};

prompt.get(schema, (err, result) => {
  const capitalizedName = capitalizeFirstLetter(result.name);

  fileFootprint.map((file) => {
    const filePath = `${process.env.PWD}/${file.path}${
      file.createDir ? `/${result.name.toLowerCase()}` : ''
    }`;
    const fileName = file.name(result.name);
    if (!fs.existsSync(filePath) && file.createDir) {
      try {
        fs.mkdirSync(filePath);
      } catch (err) {
        console.log('Error while creating directory'.red);
      }
    }

    try {
      fs.writeFileSync(`${filePath}/${fileName}.${file.ext}`, file.template(result.name));
      console.log(message('success', `${fileName} - ${file.type}`));
    } catch (err) {
      console.log(message('error', fileName, err));
    }
  });
});
