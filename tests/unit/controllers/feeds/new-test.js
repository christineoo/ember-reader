import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:feeds/new', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  var controller = this.subject();
  assert.ok(controller);
});

test('add new rss feed', function(assert){

  var ctrl = this.subject();

  ctrl.send('cancel');
  assert.equal(6, ctrl.get('model.feeds.length'));
  
});

test('calling the action setProps updates props A and B', function(assert) {
  assert.expect(4);

  // get the controller instance
  var ctrl = this.subject();

  // check the properties before the action is triggered
  assert.equal(ctrl.get('propA'), 'You need to write tests');
  assert.equal(ctrl.get('propB'), 'And write one for me too');

  // trigger the action on the controller by using the `send` method,
  // passing in any params that our action may be expecting
  ctrl.send('setProps', 'Testing Rocks!');

  // finally we assert that our values have been updated
  // by triggering our action.
  assert.equal(ctrl.get('propA'), 'Testing is cool');
  assert.equal(ctrl.get('propB'), 'Testing Rocks!');
});
