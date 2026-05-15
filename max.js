const data = [7, 5, 8, 2, 10, 11, 25, 26];

let getMax = 0;
let getMin = 0;
let getAverage = 0;

const dataLength = data.length;

for (let i = 0; i <= dataLength; i++) {
  if (data[i] > getMax) {
    getMax = data[i];
  }
}

console.log("Max = ", getMax);

let totalData = 0;

for (let y = 0; y < dataLength; y++) {
  totalData += data[y];
}
getAverage = totalData / data.length;
console.log("Average = ", getAverage);
