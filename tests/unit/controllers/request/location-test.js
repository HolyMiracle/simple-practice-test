import { module, test } from 'qunit';
import { setupTest } from 'simple-practice-test/tests/helpers';

module('Unit | Controller | request/location', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:request/location');
    assert.ok(controller);
  });
});
