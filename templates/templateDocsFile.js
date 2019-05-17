const templateDocsFile = name => `import React, { Component } from 'react';
import { generateInput, generateCodeBlock, generateState } from '../../docs/utils';

const KNOBS = {
  firstStepKnobs: [
    { type: 'checkbox', label: 'Complex', state: 'complex', defaultState: false },
    { type: 'checkbox', label: 'Disabled', state: 'disabled', defaultState: false },
  ],
};

class ${name}Docs extends Component {
    state = { ...generateState(KNOBS) };
    render() {
        return (
          <div className="container" id={\`radio-option-docs\`}>
            <div className="section">
              <div className="row">
                <div className="col-md-6">
                  <h2>Component Name</h2>
                  <p>Component Description</p>
                </div>
                <div className="col-md-6">
                  <${name}/>
                </div>
              </div>
              <div className="row m-t-5">
                <div className="col-md-6">
                  {generateCodeBlock('${name}', KNOBS, this)}
                </div>
                <div className="col-md-6">
                  <div className="row">
                    {KNOBS.firstStepKnobs.map(knob => generateInput(knob, this))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default ${name}Docs;
`;

module.exports = templateDocsFile;
