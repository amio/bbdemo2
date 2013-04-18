/**
 * Main Router
 * Date: 4/17/13
 */
define(['$', '_', 'B'], function ($, _, B){
  var AppRouter = B.Router.extend({
    routes: {
      '': 'index',
      'hotel/:id': 'hotel'
    },
    initialize: function (){
      this.bindRoutes();
      // expose AppRouter
      return this;
    },
    bindRoutes: function (){
      // transfer to controllers
      _.each(this.routes, function (name, path){
        this.route(path, name, function (){
          var args = this.parseRouteArgs(path,arguments);
          require(['controllers/' + name], function (Controller){
            new Controller(args);
          });
        });
      }, this);
    },
    parseRouteArgs: function (path,segments){
      //
      var args = {};
      return segments;
    }

  });
  return AppRouter;
});