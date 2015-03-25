import DS from "ember-data";

var FeedItem = DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string'),
  content: DS.attr('string'),
  feeds: DS.belongsTo('feed')
});

FeedItem.reopenClass({
    FIXTURES: [
    {
      //id: 1,
      name: 'ABC',
      url: 'ABC - http://codebrief.com/atom.xml',
      content: 'ABC'
    },
    {
      //id: 2,
      name: 'DEF',
      url: 'DEF - https://grouptalent.com/blog/feed.xml',
      content: 'DEF'
    },
    {
      //id: 3,
      name: 'XYZ',
      url: 'XYZ - http://alistapart.com/site/rss',
      content: 'XYZ'
    }
  ]
});

export default FeedItem;
