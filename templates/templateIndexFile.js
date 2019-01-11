const templateIndexFile = name => `import ${name} from './${name}';
export default ${name};
`;

module.exports = templateIndexFile;
