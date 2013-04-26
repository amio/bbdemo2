/**
 * Hotel View
 */
define(['$', '_', 'B', 'BV', 'text!templates/hotel.html'], function ($, _, B, BaseView, hotelTmpl){
  'use strict';

  var IndexView = BaseView.extend({
    className: 'hotel-view',
    initialize: function (args){
      this.render(args);
    },
    render: function (renderArgs){
      this.$el.html(_.template(hotelTmpl)(renderArgs));

      // Render to page wrapper
      this.renderPage();
      return this;
    }
  });

  return IndexView;
});