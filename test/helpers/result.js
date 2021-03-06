/**
 * Asserts error is error.
 *
 * Copyright (c) 2013 - 2018, Alex Grant, LocalNerve, contributors
 */
var assert = require("assert");

function mustBeError(err) {
  assert.throws(
    function() {
      assert.ifError(err);
    },
    function(err) {
      return !!err;
    }
  );
}

module.exports = {
  mustBeError: mustBeError
};