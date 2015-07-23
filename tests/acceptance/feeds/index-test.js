import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'my-new-app/tests/helpers/start-app';

var application;

module('Acceptance: FeedsIndex', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentPath(), 'feeds.index');
  });
});
