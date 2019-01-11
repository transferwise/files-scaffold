const prompt = require("prompt");
const path = require("path");
const fs = require("fs");
const colors = require("colors");
const templateEntryFile = require("./templates/templateEntryFile");
const templateStyleFile = require("./templates/templateStyleFile");
const templateIndexFile = require("./templates/templateIndexFile");
const templateJestFile = require("./templates/templateJestFile");
const templateReadMeFile = require("./templates/templateReadMeFile");
const templateStoryBookFile = require("./templates/templateStoryBookFile");
const { capitalizeFirstLetter, message } = require("./utils");

const scrFolder = "src";

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
      // pattern: /^[A-Za-z\s]+$/,
      // message: 'Please insert a component name: Only letters allowed',
      // required: true,
      default: "test"
    },
    path: {
      message: "Please insert a component path: ",
      default: `${scrFolder}`
    }
  }
};
const files = [
  {
    name: "index file",
    ext: "js",
    template: templateIndexFile,
    fileName: "index"
  },
  {
    name: "readMe file",
    ext: "md",
    template: templateReadMeFile,
    fileName: "README"
  },
  {
    name: "entry file",
    ext: "js",
    template: templateEntryFile
  },
  {
    name: "style file",
    ext: "less",
    template: templateStyleFile
  },
  {
    name: "jest file",
    ext: "spec.js",
    template: templateJestFile
  },
  {
    name: "storyBook file",
    ext: "stories.js",
    template: templateStoryBookFile
  }
];
prompt.get(schema, (err, result) => {
  const capitalizedName = capitalizeFirstLetter(result.name);

  const componentPath = `${result.path}/${result.name.toLowerCase()}`;

  if (!fs.existsSync(componentPath)) {
    try {
      fs.mkdirSync(componentPath);
      try {
        files.map(file => {
          try {
            fs.writeFileSync(
              `${componentPath}/${file.fileName || capitalizedName}.${
                file.ext
              }`,
              file.template(capitalizedName)
            );
            console.log(message("success", file.name.green));
          } catch (err) {
            console.log(message("error", file.name.red, err));
          }
        });
      } catch (err) {
        console.log(message("error", "directory").red, err);
      }
    } catch (err) {
      console.log("Error while creating directory".red);
    }
  } else {
    console.log("Directory already exists".red);
  }
});
