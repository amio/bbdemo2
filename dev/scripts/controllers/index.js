/**
 * Index Controller
 * Date: 4/17/13
 */
define(['$', '_', 'B','BC', 'views/index'], function ($, _, B, BaseController, IndexView){
  'use strict';
  var IndexController = BaseController.extend({
    initialize: function(args){
      console.log('IndexController Initialized.');
      new IndexView(args);
    }
  });
  return IndexController;
});