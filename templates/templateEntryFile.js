const templateEntryFile = name => `import React ,{PureComponent} from 'react';
import Types from 'prop-types';

export default class ${name} extends React.PureComponent {
    // Component's PropsTypes
    static propTypes = {}
    // Component's defaultProps
    static defaultProps = {}
    render(){
     return <div className={'tw-${name.toLowerCase()}'}>// Insert your code here</div>;
    }
}
`;

module.exports = templateEntryFile;
