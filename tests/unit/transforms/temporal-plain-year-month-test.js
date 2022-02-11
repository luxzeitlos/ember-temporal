import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { Temporal } from '@js-temporal/polyfill';

module('Unit | Transform | temporal plain year month', function (hooks) {
  setupTest(hooks);

  test('it can deserialize', function (assert) {
    let transform = this.owner.lookup('transform:temporal-plain-year-month');
    const obj = transform.deserialize('2012-12');
    assert.ok(obj instanceof Temporal.PlainYearMonth);
    assert.strictEqual(obj.year, 2012);
    assert.strictEqual(obj.month, 12);
  });

  test('can deserialize null', function (assert) {
    let transform = this.owner.lookup('transform:temporal-plain-year-month');
    const obj = transform.deserialize(null);
    assert.strictEqual(obj, null);
  });

  test('it can serialize', function (assert) {
    let transform = this.owner.lookup('transform:temporal-plain-year-month');
    const str = transform.serialize(new Temporal.PlainYearMonth(2020, 3));
    assert.strictEqual(str, '2020-03');
  });
});
