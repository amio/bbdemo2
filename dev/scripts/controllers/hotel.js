/**
 * Hotel Controller
 * Date: 4/18/13
 */
define(['$', '_', 'B','BC'], function ($, _, B, BaseController){
  'use strict';
  var HotelController = BaseController.extend({
    initialize: function(args){
      console.log('HotelController Initialized.');
    }
  });
  return HotelController;
});