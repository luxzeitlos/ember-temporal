import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { Temporal } from '@js-temporal/polyfill';

module('Unit | Transform | temporal plain date time', function (hooks) {
  setupTest(hooks);

  test('it can deserialize', function (assert) {
    let transform = this.owner.lookup('transform:temporal-plain-date-time');
    const obj = transform.deserialize('1969-07-20T18:33');
    assert.ok(obj instanceof Temporal.PlainDateTime);
    assert.strictEqual(obj.year, 1969);
    assert.strictEqual(obj.month, 7);
    assert.strictEqual(obj.day, 20);
    assert.strictEqual(obj.hour, 18);
    assert.strictEqual(obj.minute, 33);
  });

  test('it can serialize', function (assert) {
    let transform = this.owner.lookup('transform:temporal-plain-date-time');
    const str = transform.serialize(
      new Temporal.PlainDateTime(2020, 3, 2, 17, 33, 15)
    );
    assert.strictEqual(str, '2020-03-02T17:33:15');
  });
});
