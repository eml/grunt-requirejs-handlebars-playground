/*
 * So:
 *   put all the configuration in www/js/config.js as a 'var require = {}' statement
 *   at the top of every page on the site, include config.js as a script or just
 *     pull it into the source of the page (latter is preferable, right?)
 *   if I want to use the require stuff in any page, add this tag:
 *     <script src='js/vendor/require.js' data-main='module/id'></script>
 *   that will pull in the require script and the module and run it
 *
 * further optimization:
 *   - compile require.js into the packaged module itself
 *     this throws all the base stuff in a single download for the page, and we
 *     can 'require' in new modules as the code runs. The downside is that
 *     the HTML needs to be changed so that we don't load 'require.js', but rather
 *     we load 'path/to/module.js'. This could be fixed up with a PHP tag
 *
 *
 */

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.initConfig({
    requirejs: {
      all: {
        options: {
          mainConfigFile: 'www-in/js/config.js',

          appDir: 'www-in',
          baseUrl: 'js/vendor',

          /* compile various modules, and include require.js in them */
          dir: 'www-out',
          modules: [
            { name: 'page/pagefile', include: [ 'vendor/require' ] }
          ]

          /* compile a single module. out is a filename, name is a module id
          name: 'page/pagefile',
          include: [ 'vendor/require' ],
          out: 'www-out/js/pagefile.js'
          */

        }
      }
    }
  });
};

