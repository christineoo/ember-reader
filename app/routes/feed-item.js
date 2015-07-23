import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('feed-item', params.feedItems_id);
  },

  actions: {
    back: function(){
      history.back();
    }
  }
});
