const path = require ('path');
const string = __filename;

console.log('path.sep: ', path.sep);
console.log('path.delimiter: ', path.delimiter);
console.log('------------------------------');
console.log('path.dirname(): ', path.dirname(string));
console.log('path.extname(): ', path.extname(string));
console.log('path.basename(): ', path.basename(string));
console.log('------------------------------');
console.log('path.parse()', path.parse(string));
console.log('path.format(): ', path.format({
    dir: 'C:\\user\\zerocho',
    name: 'path',
    ext: '.js'
}));
console.log('path.nomalize(): ', path.normalize('C://users////zerocho///path.js'));
console.log('------------------------------');
console.log('path.isAbsolute(): ', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(): ', path.isAbsolute('./home'));
console.log('------------------------------');
console.log('path.relative(): ', path.relative('c:\\users\\zerocho\\path.js', 'c:\\'));
console.log('path.join(): ', path.join(__dirname, '..','..','/users/','.','/zerocho'));
console.log('path.resolve(): ', path.resolve(__dirname, '..', 'users', '.', '/zerocho'));
