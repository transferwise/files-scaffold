const templateEntryFile = name => `import React ,{Component} from 'react';
import Types from 'prop-types';

class ${name} extends Component {
    static propTypes = {}
    static defaultProps = {}
    render(){
     return <div>// Insert your code here</div>;
    }
}

export default ${name}
`;

module.exports = templateEntryFile;
