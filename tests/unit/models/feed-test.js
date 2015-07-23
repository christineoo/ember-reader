import DS from 'ember-data';
import Ember from 'ember';
import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('feed', 'Feed', {
  // Specify the other units that are required for this test.
    needs: ['model:feed-item']
});

test('it exists', function(assert) {
  var model = this.subject();
  var store = this.store();
  var feed = this.subject({
     id: 1,
     name: 'CodeBrief',
     url: 'http://codebrief.com/atom.xml'
  });
  assert.ok(feed);
  assert.ok(feed instanceof DS.Model);

  //assert.ok(!!model);
});

test('feed-items relationship', function(assert){
  var relationships = Ember.get(this.store().modelFor('feed'), 'relationshipsByName');

  assert.equal(relationships.get('feedItems').key, 'feedItems');
  assert.equal(relationships.get('feedItems').kind, 'hasMany');

});
