#!/usr/bin/env node

const prompt = require("prompt");
const { join } = require("path");
const fs = require("fs");
const { message } = require("./utils/index.js");

const templatesDirectory = process.env.PWD + "/.scaffold-templates";

let files;
try {
  files = fs.readdirSync(templatesDirectory);
} catch (err) {
  // An error occurred
  return console.error("Please add a templates directory");
}

const fileFootprint = [];

try {
  files.forEach(function (file) {
    var templateFile = require(`${templatesDirectory}/${file}`);
    fileFootprint.push({ ...templateFile });
  });
} catch (err) {
  return console.log(
    "Unable to find your templates files. Please ensure your .scaffold-templates has been created correctly"
  );
}

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
      message: "Please insert a component name: Only letters allowed",
      required: true,
      default: "test",
    },
  },
};

prompt.get(schema, (err, result) => {
  fileFootprint.map((file) => {
    const filePath = `${process.env.PWD}/${file.path}${
      file.createDir ? `/${result.name.toLowerCase()}` : ""
    }`;
    const fileName = file.name(result.name);
    // Does directory already exists.
    if (!fs.existsSync(filePath)) {
      try {
        fs.mkdirSync(filePath);
        console.log(`Directory created:${filePath}`.green);
      } catch (err) {
        console.log("Error while creating directory".red);
      }
    } else {
      console.log(`Directory already exists`.yellow);
    }

    try {
      fs.writeFileSync(
        `${filePath}/${fileName}.${file.ext}`,
        file.template(result.name)
      );
      console.log(message("success", `${fileName} - ${file.type}`));
    } catch (err) {
      console.log(message("error", fileName, err));
    }
  });
});
