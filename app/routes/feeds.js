import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.findAll('feed');
  },

  actions: {
    showCategory: function(category){
      if (category == 'android'){
        this.controller.toggleProperty('isShowAndroidCategory');
      }
      else if (category == 'design'){
        this.controller.toggleProperty('isShowDesignCategory');
      }
      else if (category == 'news'){
        this.controller.toggleProperty('isShowNewsCategory');
      }
    }
  }
});
