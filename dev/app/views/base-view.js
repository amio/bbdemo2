define(['$', '_', 'B'], function ($, _, B){
  'use strict';

  var BaseView = B.View.extend({
    tagName: 'div',
    renderPage: function (){
      $('#wrapper').html('');
      this.$el.appendTo('#wrapper');
    }
  });

  return BaseView;
});