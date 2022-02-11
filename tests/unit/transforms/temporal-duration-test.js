import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { Temporal } from '@js-temporal/polyfill';

module('Unit | Transform | temporal duration', function (hooks) {
  setupTest(hooks);

  test('it can deserialize', function (assert) {
    let transform = this.owner.lookup('transform:temporal-duration');
    const obj = transform.deserialize('P40D');
    assert.strictEqual(obj.days, 40);
  });

  test('it can serialize', function (assert) {
    let transform = this.owner.lookup('transform:temporal-duration');
    const str = transform.serialize(new Temporal.Duration(0, 3, 0, 42));
    assert.strictEqual(str, 'P3M42D');
  });
});
