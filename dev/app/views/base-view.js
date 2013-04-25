define(['$', '_', 'B'], function ($, _, B){
  'use strict';

  var BaseView = B.View.extend({
    tagName: 'div',

    renderPage: function (){

      var router = window.appRouter;
      this.$el.addClass('page').appendTo('#wrapper');
      this.$el.position();

      if (this.supportAnimation() && router.currentPageView) {
        this.doSlide(router.currentPageView, this, 'slideleft', function (fromView, toView){
          fromView.remove();
        });
      } else {
        router.currentPageView && router.currentPageView.remove();
      }
      router.currentPageView = this;


    },

    supportAnimation: function (){
      return true;
    },

    /**
     * Do Slide Animation with current page view and new page view
     * @param fromPageView {Backbone.View}
     * @param toPageView {Backbone.View}
     * @param animationName {String}
     * @param callback {Function}
     */
    doSlide: function (fromPageView, toPageView, animationName, callback){
      var fromEl = fromPageView.$el,
          toEl = toPageView.$el;

      fromEl.on('webkitAnimationEnd', function (){
        toEl.removeClass(animationName + ' in');
        callback(fromPageView, toPageView);
      });

      fromEl.addClass(animationName + ' out');
      toEl.removeClass('pending').addClass(animationName + ' in');
    }
  });

  return BaseView;
});