calculate([1, 7, 5, 8, 2, 10, 11, 25, 26])

function calculate (data) {
  if (typeof data !== "array") {
    return "Parameter must be  array";
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