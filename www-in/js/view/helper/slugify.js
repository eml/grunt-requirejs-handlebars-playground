/*global define:false*/

define([ 'Handlebars' ], function(Handlebars) {
  
  function slugify(text) {
    if ((text === undefined) || (text == null)) {
      return '';
    } else {
      return text.replace(/[^a-zA-Z0-9]/g, "-").replace(/--+/g, "-");
    }
  }

  Handlebars.registerHelper("slugify", slugify);

  return slugify;
});
