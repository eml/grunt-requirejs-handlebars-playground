
require([ 'hbs!template/blip-dialog', 'vendorfile', 'lib/libfile' ], function(template, vendorFile, libFile) {
  var module = 'foobar';

  console.log('got', module, vendorFile, libFile, template());

  var p = document.createElement('p'),
      text = 'I found ' + module + ' and ' + vendorFile + ' and ' + libFile + ' and ' + template();

  p.innerHTML = text;

  document.body.appendChild(p);

  return text;

});
