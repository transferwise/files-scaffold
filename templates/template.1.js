const { capitalizeFirstLetter } = require('../utils/index.js');

module.exports = {
  type: 'component',
  path: 'packages/components/src',
  ext: 'js',
  createDir: true,
  name: (name) => capitalizeFirstLetter(name),
  template: (name) => `import React from "react";
import Types from "prop-types";
/**
 * ${capitalizeFirstLetter(name)} docs.
 *
 * @param {type} [propname=""] - propsDescription.
 *
 * @usage "<${capitalizeFirstLetter(name)}/>"
**/
    
const ${capitalizeFirstLetter(name)} = (props) => {
  return ();
};

${capitalizeFirstLetter(name)}.propTypes = {};
${capitalizeFirstLetter(name)}.defaultProps = {};

export default ${capitalizeFirstLetter(name)};
`,
};
