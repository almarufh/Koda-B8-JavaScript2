function calculate (data) {
  if (!(Array.isArray(data))) {
    return "Parameter must be array";
  };

  if (data.length < 1) {
    return "Array cannot empty";
  }

  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] !== "number") {
      return "Array must be number";
    }
  }
  let getMax = data[0];
  let getMin = data[0];
  let getAverage = data[0];
  let totalData = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > getMax) {
      getMax = data[i];
    };
    if (data[i] < getMin) {
      getMin = data[i];
    };

    totalData += data[i];
  }

  getAverage = totalData / data.length;

  let results = `Max : ${getMax}\n`;
  results += `Min : ${getMin}\n`;
  results += `Average : ${getAverage}`;
  return results
}

console.log(calculate([2, 1, 3, 1, 8, 9]))
console.log(calculate(["r", 1]))
console.log(calculate([]))
console.log(calculate("STRING"))