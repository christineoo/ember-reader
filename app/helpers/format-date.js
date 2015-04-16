import Ember from "ember";
/* global moment */

var formatDate = Ember.Handlebars.makeBoundHelper(function(date) {
  return moment(date).format('LLL');
});

export default formatDate;
