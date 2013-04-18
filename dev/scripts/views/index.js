/**
 * Index View
 */
define(['$', '_', 'B', 'BV', 'text!templates/index.html'], function ($, _, B, BaseView, indexTmpl){
  'use strict';

  var IndexView = BaseView.extend({
    className: 'index-view',
    initialize: function (args){
      this.render(args);
    },
    render: function (renderArgs){
      this.$el.html(_.template(indexTmpl)(renderArgs));
      this.renderPage();
      return this;
    }
  });

  return IndexView;
});