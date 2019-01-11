const templateJestFile = name => `
import React from 'react';
import { shallow, mount } from 'enzyme';

import ${name} from './';


describe('${name}', () => {})
`;

module.exports = templateJestFile;
