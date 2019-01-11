const { capitalizeFirstLetter } = require('../utils/index.js');

module.exports = {
  type: 'jest',
  path: 'packages/components/src',
  ext: 'spec.js',
  createDir: true,
  name: (name) => capitalizeFirstLetter(name),
  template: (name) => `import React from 'react';
import ${capitalizeFirstLetter(name)} from './';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';

describe('${capitalizeFirstLetter(name)}', () => {
    it('your test here', () => {});
});`,
};
