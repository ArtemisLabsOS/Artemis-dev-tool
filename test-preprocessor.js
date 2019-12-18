const typescript = require('typescript');
const typescriptConfig = require('./tsconfig.json');

module.exports = {
    process(src, path) {
        if (path.endsWith('.ts') || path.endsWith('.tsx') || path.endsWith('.js')) {
            return typescript.transpile(src, typescriptConfig.compilerOptions, path, []);
        }
        return src;
    },
};