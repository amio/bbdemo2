/**
 * Main Router
 * Date: 4/17/13
 */
define(['$', '_', 'B'], function ($, _, B){
  'use strict';

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

    /**
     * ROUTES
     */

    bindRoutes: function (){
      // transfer to controllers
      _.each(this.routes, function (name, path){
        this.route(path, name, function (){
          var args = this.parseRouteArgs(path, arguments);
          require(['views/' + name], function (View){
            new View(args);
          });
        });
      }, this);
    },
    parseRouteArgs: function (path, segments){
      // todo: parse path & segments to args
      var args = {};
      return segments;
    },

    /**
     * HISTORY & CACHE
     */

    historyPages: [],
    getCurrentPage: function(){
      return _.last(this.historyPages);
    },
    isBack: function(){
      var len = this.historyPages.length;
      return len && _.last(this.historyPages).hash == B.history.fragment;
    }

  });
  return AppRouter;
});