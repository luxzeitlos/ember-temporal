import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { Temporal } from '@js-temporal/polyfill';

module('Unit | Transform | temporal plain time', function (hooks) {
  setupTest(hooks);

  test('it can deserialize', function (assert) {
    let transform = this.owner.lookup('transform:temporal-plain-time');
    const obj = transform.deserialize('18:33:15');
    assert.ok(obj instanceof Temporal.PlainTime);
    assert.strictEqual(obj.hour, 18);
    assert.strictEqual(obj.minute, 33);
    assert.strictEqual(obj.second, 15);
  });

  test('it can serialize', function (assert) {
    let transform = this.owner.lookup('transform:temporal-plain-time');
    const str = transform.serialize(new Temporal.PlainTime(2, 29));
    assert.strictEqual(str, '02:29:00');
  });
});
