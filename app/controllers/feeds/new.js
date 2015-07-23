import Ember from "ember";

export default Ember.Controller.extend({
 
  actions:{
    save: function() {
      var model = this.get('model');
      model.category = this.get('selectedValue');
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

