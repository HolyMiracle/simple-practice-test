import { module, test } from 'qunit';
import { setupTest } from 'simple-practice-test/tests/helpers';

module('Unit | Model | cpt codes', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('cpt-codes.js', {});
    assert.ok(model);
  });
});
