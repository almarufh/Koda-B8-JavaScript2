const data = [1, 7, 5, 8, 2, 10, 11, 25, 26];

let getMax = 0;
let getMin = 10;
let getAverage = 0;
const dataLength = data.length;

// MAX
for (let i = 0; i < dataLength; i++) {
  if (data[i] > getMax) {
    getMax = data[i];
  }
}

console.log("Max = ", getMax);

// Average
let totalData = 0;

for (let y = 0; y < dataLength; y++) {
  totalData += data[y];
}
getAverage = totalData / data.length;
console.log("Average = ", getAverage);

for (let x = 0; x < dataLength; x++) {
  if (data[x] < getMin) {
    getMin = data[x];
  }
}

console.log("Min = ", getMin);
