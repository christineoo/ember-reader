import Ember from "ember";

export default Ember.View.extend({
    classNames: ["ember-app"],

    didInsertElement: function() {
      document.getElementById('iframeid').style.height = (window.innerHeight-80) + "px"
    }

});
