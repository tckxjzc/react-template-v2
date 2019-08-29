let path=require('path');
let prods=!process.argv.includes('--dev');
module.exports = {
    title: '',
    isProds:prods,
    dist:path.resolve(__dirname,'../dist'),
    resourceOutput: 'resource',
    publicPath:'/'
};