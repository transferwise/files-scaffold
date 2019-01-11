const templateStoryBookFile = name => `import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import ${name} from './${name}';


storiesOf('${name}', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .add('with Info', () => {
    return (
      <${name}/>
    );
  });
`;

module.exports = templateStoryBookFile;
