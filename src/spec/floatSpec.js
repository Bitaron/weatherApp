"use strict";

var Float = require('../client/float');
var TestData = require('../spec/data/test.data');
var ExpectedData = require('./data/expected.data');

describe("Create float using ", function() {
    it("separated significand and exponent", function() {
        var float = Float.parse(TestData.CONSTRUCTOR_DATA.significand,
            TestData.CONSTRUCTOR_DATA.exponent);
        expect(float.equals(ExpectedData.CONSTRUCTOR_DATA)).toBe(true);
    });

    it("using decimal number", function() {
        var first = Float.parseNumber(ExpectedData.OPERATION_DATA.CONVERSITION_DATA.FIRST);
        var firstMinus = Float.parseNumber(ExpectedData.OPERATION_DATA.CONVERSITION_DATA.FIRST_M);
        var second = Float.parseNumber(ExpectedData.OPERATION_DATA.CONVERSITION_DATA.SECOND);
        expect(first.equals(TestData.OPERATION_DATA.CONVERTION_DATA.FIRST)).toBe(true);
        expect(firstMinus.equals(TestData.OPERATION_DATA.CONVERTION_DATA.FIRST_M)).toBe(true);
        expect(second.equals(TestData.OPERATION_DATA.CONVERTION_DATA.SECOND)).toBe(true);
    })
});

describe("Float can ",function() {
    it("coverts the map into single number", function() {
        var first = Float.convertToSingleNumber(TestData.OPERATION_DATA.CONVERTION_DATA.FIRST);
        var firstMinus = Float.convertToSingleNumber(TestData.OPERATION_DATA.CONVERTION_DATA.FIRST_M);
        var second = Float.convertToSingleNumber(TestData.OPERATION_DATA.CONVERTION_DATA.SECOND);
        expect(first).toBe(ExpectedData.OPERATION_DATA.CONVERSITION_DATA.FIRST);
        expect(firstMinus).toBe(ExpectedData.OPERATION_DATA.CONVERSITION_DATA.FIRST_M);
        expect(second).toBe(ExpectedData.OPERATION_DATA.CONVERSITION_DATA.SECOND);
    })
});

describe("Operation: short by ",function() {
    it("insertion sort",function() {

    })
});