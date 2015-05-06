import DS from "ember-data";
import Ember from 'ember';

var Feed = DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string'),
  isRssfeed: DS.attr('boolean', {defaultValue: true}),
  feedItems: DS.hasMany('feed-item'),

  refresh: function() {
    var url = this.get('url');
    var isRssfeed = this.get('isRssfeed');
    var googleUrl = document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url);
    if (isRssfeed){
      Ember.$.ajax({
        url: googleUrl,
        dataType: 'json',
        context: this,
        success: function(data) {
          var feed = data.responseData.feed;
          var items = feed.entries.forEach(function(entry) {
            if(this.get('feedItems').findProperty('link', entry.link)) {
              return;
            }
            var feedItem = this.get('feedItems').createRecord({
              title: entry.title,
              author: entry.author,
              body: entry.content,
              bodySnippet: entry.contentSnippet,
              link: entry.link,
              publishedDate: entry.publishedDate
            });
          }, this);
          this.get('feedItems').save();
        }
      });
    }
  }
});

Feed.reopenClass({
    FIXTURES: [
    {
      id: 1,
      name: 'CodeBrief',
      url: 'http://codebrief.com/atom.xml'
    },
    {
      id: 2,
      name: 'Android Developers Blog',
      url: 'http://feeds.feedburner.com/blogspot/hsDu?format=xml'
    },
    {
      id: 3,
      name: 'A List A Part',
      url: 'http://alistapart.com/site/rss'
    }
  ]
});

export default Feed;
