console.log('Calculator.js start');
console.log(module);

const { sum, multiplication } = require('./Math.js');

exports.result = sum(10, 10);

console.log('Calculator.js finish');