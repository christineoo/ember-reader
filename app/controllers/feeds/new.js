import Ember from "ember";

export default Ember.ObjectController.extend({
 
  actions:{
    save: function() {
      var model = this.get('model');
      model.save();
      this.target.transitionTo('feeds.index'); 
      //var feed = this.store.creteRecord({
      //  name: this.get('newName'),
      //  url: this.get('newUrl')
      //});
      //feed.save();
    },
    cancel: function() {
      var model = this.get('model');
      model.deleteRecord();
      this.target.transitionTo('feeds.index');
    }
  }
});

