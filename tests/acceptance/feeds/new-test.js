import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'my-new-app/tests/helpers/start-app';

var application;

module('Acceptance: FeedsNew', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /new', function(assert) {
  visit('/new');

  andThen(function() {
    assert.equal(currentPath(), 'feeds.new');
  });
});

test('Clicking cancel in /new page', function(assert){
  visit('/new');
  click('button.md-button.md-default-theme.md-raised, .md-button.md-default-theme.md-fab');

  andThen(function(){
    assert.equal(currentPath(), 'feeds.index');
  });
});
