define(['$','_','B','text!templates/index.html'],function($,_,B,indexTmpl){
  var IndexView = B.View.extend({
    el:'#wrapper',
    searchArgs: {
      startDate: ''
    },
    initialize: function(){
      this.render();
    },
    render: function(){
      this.$el.html('');
      this.$el.html(_.template(indexTmpl)(this.searchArgs));
      this.els = {
        cityId: this.$el.find()[0],
        checkinDate: this.$el.find('#checkinDate')[0],
        checkoutDate: this.$el.find('#checkoutDate')[0]
      };
      console.timeEnd('pageload');
      return this;
    },
    /**
     * Events
     */
    events:{
      'click .ui-btn-up-g': 'doSearch',
      'change .date-picker': 'updateDate'
    }
  });
  return IndexView;
});