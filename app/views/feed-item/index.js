import Ember from "ember";

export default Ember.View.extend({
    classNames: ["ember-app"],

    didInsertElement: function() {
      var _this = this;
      document.getElementById('iframeid').style.height = (window.innerHeight-80) + "px";
      $(window).on('resize', function(){
        Ember.run(function(){
          document.getElementById('iframeid').style.height = (window.innerHeight-80) + "px";
        });
      });
      document.getElementById("iframeid").onload = function(x) {
        var remote = _this.canAccessIFrame(document.getElementById("iframeid"));
        console.log("remote: " + remote);
      }
    },

    canAccessIFrame: function (iframe) {
      var html = null;
      try {
        // deal with older browsers
        var doc = iframe.contentDocument || iframe.contentWindow.document;
        html = doc.body.innerHTML;
      } catch(err){
          console.log("errrr: " + err);
        // do nothing
      }

      return(html !== null);
    }

});
