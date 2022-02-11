import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { Temporal } from '@js-temporal/polyfill';

module('Unit | Transform | temporal plain date', function (hooks) {
  setupTest(hooks);

  test('it can deserialize', function (assert) {
    let transform = this.owner.lookup('transform:temporal-plain-date');
    const obj = transform.deserialize('1969-07-20');
    assert.ok(obj instanceof Temporal.PlainDate);
    assert.strictEqual(obj.year, 1969);
    assert.strictEqual(obj.month, 7);
    assert.strictEqual(obj.day, 20);
  });

  test('it can serialize', function (assert) {
    let transform = this.owner.lookup('transform:temporal-plain-date');
    const str = transform.serialize(new Temporal.PlainDate(2020, 3, 2));
    assert.strictEqual(str, '2020-03-02');
  });
});
