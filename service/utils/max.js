/**
 * @typedef {number[]} Data
 * @property {number} in array not empty and must number
*/

/**
 * @typedef {object} OutputData
 * @property {number} max max is results calculate max
 * @property {number} min min is results calculate min
 * @property {number} average average is results calculate average
 */

/** 
 * @typedef {object} Output
 * @property {string} code code 00
 * @property {string} message message success
 * @property {OutputData} data object with max, min and average
*/

/**
 * @param {Data} data must array not empty and must number
 * @returns {Output} an object with code, message and data value object with max, min, average
 * @throws {Error} Error when params not array or array empty and array but not must be number
 */

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
      break;
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
    message: "calculate success",
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