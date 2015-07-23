import Ember from "ember";

export default Ember.View.extend({
    classNames: ["ember-app"],

    didInsertElement: function() {
      document.getElementById('iframeid').style.height = (window.innerHeight-80) + "px";
      $(window).on('resize', function(){
        Ember.run(function(){
          document.getElementById('iframeid').style.height = (window.innerHeight-80) + "px";
        });
      });
    }

});
