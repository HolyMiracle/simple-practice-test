import { module, test } from 'qunit';
import { setupTest } from 'simple-practice-test/tests/helpers';

module('Unit | Route | request', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:request');
    assert.ok(route);
  });
});
