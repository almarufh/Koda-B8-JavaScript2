function calculate (data) {
  if (!(Array.isArray(data))) {
    throw new Error ("parameter must be a array");
  };

  if (data.length < 1) {
    throw new Error ("Array cannot empty");
  }

  let checkNumber = true
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i] !== "number") {
      checkNumber = false
    }
  }

  if (checkNumber === false) {
    throw new Error ("Array must be number");
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

  let results = {
    code: "00",
    message: "calculate succes",
    data: {
      max: getMax,
      min: getMin,
      average: getAverage
    }
  }
  return results
}

module.exports = {
  calculate
}