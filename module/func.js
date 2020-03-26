const { odd, even } = require ('./var'); //ES5
// import { odd, even } from './var.js'; //ES6 - 안됨

function checkOddOrEven (num) {
    if (num%2) return odd;
    return even;
}

module.exports = checkOddOrEven; //ES5
// export default checkOddOrEven; //ES6 - 안됨