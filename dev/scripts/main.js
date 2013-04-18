require.config({
  shim: {
    $: {
      exports: 'jQuery'
    },
    _: {
      exports: '_'
    },
    B: {
      deps: [
        '_',
        '$'
      ],
      exports: 'Backbone'
    }
  },
  paths: {
    '$': 'libs/jquery',
    '_': 'libs/underscore',
    'B': 'libs/backbone',
    'text': 'libs/require.text',
    // base components
    'BC': 'controllers/base-controller',
    'BV': 'views/base-view'
  }
});

require(['$', '_', 'B', 'app-router'], function ($, _, B, AppRouter){
  window.appRouter = new AppRouter;
  B.history.start();
});