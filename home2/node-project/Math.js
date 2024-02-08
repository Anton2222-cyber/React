console.log("Math.js start");
console.log(module);


function sum(a, b) {
  return a + b;
}
const multiplication = (a, b) => a * b;

exports.sum = sum;
exports.multiplication = multiplication;

console.log(module);
console.log("Math.js finish");

