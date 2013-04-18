/**
 * Hotel Controller
 * Date: 4/18/13
 */
define(['$', '_', 'B','BC', 'views/hotel'], function ($, _, B, BaseController, HotelView){
  'use strict';
  var HotelController = BaseController.extend({
    initialize: function(args){
      console.log('HotelController Initialized.');
      var hotelView = new HotelView(args);
    }
  });
  return HotelController;
});