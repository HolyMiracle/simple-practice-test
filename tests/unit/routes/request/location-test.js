import { module, test } from 'qunit';
import { setupTest } from 'simple-practice-test/tests/helpers';

module('Unit | Route | request/location', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:request/location');
    assert.ok(route);
  });
});
