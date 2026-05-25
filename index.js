const {calculate} = require('./max.js');


const response = calculate([2,5,10,67,8,10,15,20]);
const data = response.data;

console.log("Max : ", data.max);
console.log("Min : ", data.min);
console.log("Average : ", data.average);