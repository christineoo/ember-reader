import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('feeds', {path: '/'}, function(){
    this.route('new');
    this.resource('feed', {path: '/feeds/:feed_id'}, function(){
      this.route('index');
      //this.route('feedItem', {path: '/feedItem/:feedItems_id'});
    });
    this.resource('feedItem', {path: '/feedItems/:feedItems_id'}, function(){
      this.route('index');
    });
  });
});

export default Router;
