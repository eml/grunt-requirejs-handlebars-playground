
var require = {
  baseUrl: '/js/vendor',

  paths: {
    // fuzz stuff
    'view' : '../view',
    'model' : '../model',
    'template' : '../template',
    'lib': '../lib',
    'test': '../test',
    'vendor': '../vendor',
    'page': '..',

    // library aliases
    'jquery': 'jquery-1.7.2',
    'jquery-ui': 'jquery-ui-1.9.1.custom',
    'Backbone': 'backbone-0.9.1.min',
    'Backbone.deep-model': 'backbone.deep-model',
    'Soundmanager': 'soundmanager2.97a.20111220',
    'SWFUpload': 'swfupload',
    'CryptoJS': 'hmac-sha256'
  },

  shim: {
    'underscore': {
      exports: '_'
    },
    'moment': {
      exports: 'moment'
    },
    'oauth': {
      exports: 'OAuth'
    },
    'sha1': {
      exports: 'hex_sha1'
    },
    'CryptoJS': {
      exports: 'CryptoJS'
    },
    'enc-base64': [ 'CryptoJS' ],
    'jquery-ui': [ 'jquery' ],
    'jquery.autoresize': [ 'jquery' ],
    'jquery.infieldlabel': [ 'jquery' ],
    'jquery.tipsy': [ 'jquery' ],
    'jquery.validate': [ 'jquery' ],
    'jquery.cursorposition': [ 'jquery' ],
    'jquery.cookie': [ 'jquery' ],
    'bootstrap-datepicker': [ 'jquery' ],
    'bootstrap-affix': [ 'jquery' ],
    'Soundmanager': {
      exports: 'SoundManager'
    },
    'SWFUpload': {
      exports: 'SWFUpload'
    },
    'swfupload.queue': [ 'SWFUpload' ],
    'tinyeditor': {
      exports: 'TINY'
    },
    'Backbone': {
      deps: [ 'underscore', 'jquery' ],
      exports: 'Backbone'
    },
    'Backbone.deep-model': {
      deps: [ 'Backbone' ],
      exports: 'Backbone'
    },
    'modernizr': {
      exports: 'Modernizr'
    },
    'spin': {
      exports: 'Spinner'
    },
    'mocha': {
      exports: 'mocha'
    }
  },

  hbs: {
    disableI18n: true,
    disableHelpers: false,
    helperPathCallback: function(name) { return 'view/helper/' + name; },
    templateExtension: 'html'
  },

  config: {
    'page/pagefile': {
      foo: 'bar'
    }
  }
};

