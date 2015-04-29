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
    },
    userLogin: function(){
      var self = this;
      //this.getProperties automatically return the key, value hash of the property provided
      var data = this.getProperties('email','password');
      console.log("data.email: " +data.email);
      console.log("data.password: " +data.password);

      Ember.$.ajax({
        type: "GET",
        url: "https://stageapp-leprachaun.herokuapp.com/",
        dataType: 'text/html',
        success: function(data){
          if (data.results){
            self.set('token', data.results.authtoken);
            self.transitionToRoute('home');
          }
          else {
            self.set('errorMessage', "invalid email/password");
          }
        }
      });
    }

  }
});

