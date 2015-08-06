"use strict";

var rule = require("../../lib/rules/template-string"),
    RuleTester = require("eslint").RuleTester;

var ruleTester = new RuleTester();


var valid = [
    "`${a}:${b}`",
    "`1${a}`",
    "`${a}:1`"
].map(function(code) {
    return {
        code: code,
        ecmaFeatures: { templateStrings: true }
    };
});

var message = "use template string instead of `+` string";

var invalid = [
    "'a' + 'b'",
    "'a' + 1",
    "1 + 'a'",
    "'a' + true",
    "true + 'a'",
    "'a' + null",
    "null + 'a'",
    "'a' + undefined",
    "undefined + 'a'",
    "[1] + 'a'",
    "'a' + [1]",
    "var f = function(){}; 'a' + f",
    "var f = function(){}; f + 'a'",
    "var o = { a: 'a' }; 'a' + o",
    "var o = { a: 'a' }; o + 'a'"
].map(function(code) {
    return {
        code: code,
        ecmaFeatures: { templateStrings: true },
        errors: [{ message: message }]
    };
});

ruleTester.run("template-string", rule, {
    valid: valid,
    invalid: invalid
});
