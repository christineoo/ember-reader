import DS from "ember-data";

var Feed = DS.Model.extend({
  name: DS.attr('string'),
  url: DS.attr('string')
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
      name: 'GroupTalent Blog',
      url: 'https://grouptalent.com/blog/feed.xml'
    },
    {
      id: 3,
      name: 'AlistAPart',
      url: 'http://alistapart.com/site/rss'
    }
  ]
});

export default Feed;
