import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { Temporal } from '@js-temporal/polyfill';

module('Unit | Transform | temporal plain month day', function (hooks) {
  setupTest(hooks);

  test('it can deserialize', function (assert) {
    let transform = this.owner.lookup('transform:temporal-plain-month-day');
    const obj = transform.deserialize('03-14');
    assert.ok(obj instanceof Temporal.PlainMonthDay);
    assert.strictEqual(obj.monthCode, 'M03');
    assert.strictEqual(obj.day, 14);
  });

  test('it can serialize', function (assert) {
    let transform = this.owner.lookup('transform:temporal-plain-month-day');
    const str = transform.serialize(new Temporal.PlainMonthDay(2, 29));
    assert.strictEqual(str, '02-29');
  });
});
