import DS from "ember-data";

var FeedItem = DS.Model.extend({
    title: DS.attr('string'),
    link: DS.attr('string'),
    bodySnippet: DS.attr('string'),

    feed: DS.belongsTo('feed', {async: true})
});

FeedItem.reopenClass({
    FIXTURES: []
});

export default FeedItem;
