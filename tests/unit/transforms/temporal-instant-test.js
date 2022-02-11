import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { Temporal } from '@js-temporal/polyfill';

module('Unit | Transform | temporal instant', function (hooks) {
  setupTest(hooks);

  test('it can deserialize', function (assert) {
    let transform = this.owner.lookup('transform:temporal-instant');
    const obj = transform.deserialize('1969-07-20T20:17Z');
    assert.strictEqual(obj.epochMilliseconds, -14182980000);
  });

  test('it can serialize', function (assert) {
    let transform = this.owner.lookup('transform:temporal-instant');
    const str = transform.serialize(new Temporal.Instant(0n));
    assert.strictEqual(str, '1970-01-01T00:00:00Z');
  });
});
