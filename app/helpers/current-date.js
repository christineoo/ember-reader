import Ember from "ember";
/* global moment */

export default Ember.Handlebars.makeBoundHelper(function() {
  return moment().format('LL');
});
