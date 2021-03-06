/**
 * Index View
 */
define(['$', '_', 'B', 'BPV', 'text!templates/index.html'], function ($, _, B, BasePageView, indexTmpl){
  'use strict';

  var IndexView = BasePageView.extend({
    className: 'index-view',
    initialize: function (args){
      this.render(args);
    },
    render: function (renderArgs){
      this.$el.html(_.template(indexTmpl)(renderArgs));

      // render to page wrapper
      this.renderPage();
      return this;
    },

    events: {
      'click': 'viewclick',
      'scroll': 'viewclick'
    },
    viewclick: function(){
      document.title = 'Scroll:' + Date.now();
      console && console.log(Date.now());
    }
  });

  return IndexView;
});