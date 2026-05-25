const {describe: unit, it} = require('node:test');
const input = require('node:assert/strict');
const {calculate} = require('../utils/max.js');

unit('calculating procces', ()=> {
    it('should error when parameter is not a array', () => {
        input.throws(() => calculate("[2,3,6,7,2,5,8,10,30,50]"), {
            message: "parameter must be a array"
        })
    })
    it('should error when parameter is a array empty', () => {
        input.throws(() => calculate([]), {
            message: "Array cannot empty"
        })
    })
    it('should error when parameter is a array empty', () => {
        input.throws(() => calculate(["saya", 1,2,3]), {
            message: "Array must be number"
        })
    })
    it('shold return string', () => {
        input.equal(calculate([2,3,6,7,2,5,8,10,30,50]) instanceof Object, true)
    })
})

