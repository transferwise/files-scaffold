const { capitalizeFirstLetter } = require('../utils/index.js');

module.exports = {
  type: 'story',
  path: 'packages/components/src',
  ext: 'story.js',
  createDir: true,
  name: (name) => capitalizeFirstLetter(name),
  template: (name) => `import React from 'react';
import ${capitalizeFirstLetter(name)} from './${name}';

export default {
  component: ${capitalizeFirstLetter(name)},
  title: '${capitalizeFirstLetter(name)}',
};

export const basic = () => {
  return (
    <${capitalizeFirstLetter(name)}/>
  );
};
  `,
};
