var property = require("property");

module.exports = propertify;

function propertify (orig) {
  var result = {};

  var key;
  for (key in orig) {
    result[key] = property(orig[key]);
  }

  return result;
}
