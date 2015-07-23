import Ember from "ember";

export default Ember.ArrayController.extend({
 
  androidCategory: function() {
    return this.filterBy('category', 'android');
  }.property('@each.category'),

  designCategory: function() {
    return this.filterBy('category', 'design');
  }.property('@each.category'),

  newsCategory: function() {
    return this.filterBy('category', 'news');
  }.property('@each.category'),

});
