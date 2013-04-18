/**
 * Base Controller
 * Date: 4/17/13
 */
define(['$', '_', 'B'], function ($, _, B){
  'use strict';

  var BaseController = B.Router.extend({
    parseArgs: function (args){
      return args;
    }
  });

  return BaseController;
});