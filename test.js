var propertify = require("./");

it('maps given object with property', function(){
  var child = {};
  var orig = {
    foo: 'bar',
    qux: 123,
    corge: child,
    span: undefined
  };

  var obj = propertify(orig);

  expect(obj).to.not.equal(orig);
  expect(orig.foo).to.equal('bar');

  expect(obj.foo()).to.equal('bar');

  obj.foo('strange');
  expect(obj.foo()).to.equal('strange');

  expect(obj.qux()).to.equal(123);
  expect(obj.corge()).to.equal(child);
  expect(obj.span()).to.not.exist;

  obj.span(123);
  expect(obj.span()).to.equal(123);
});
