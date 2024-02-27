import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { Temporal } from '@js-temporal/polyfill';

module('Unit | Transform | temporal zoned date time', function (hooks) {
  setupTest(hooks);

  test('it can deserialize', function (assert) {
    let transform = this.owner.lookup('transform:temporal-zoned-date-time');
    const obj = transform.deserialize(
      '2020-08-05T20:06:13+02:00[Europe/Berlin]'
    );
    assert.ok(obj instanceof Temporal.ZonedDateTime);
    assert.strictEqual(obj.year, 2020);
    assert.strictEqual(obj.month, 8);
    assert.strictEqual(obj.hour, 20);
    assert.strictEqual(obj.timeZoneId, 'Europe/Berlin');
  });

  test('can deserialize null', function (assert) {
    let transform = this.owner.lookup('transform:temporal-zoned-date-time');
    const obj = transform.deserialize(null);
    assert.strictEqual(obj, null);
  });

  test('it can serialize', function (assert) {
    let transform = this.owner.lookup('transform:temporal-zoned-date-time');
    const str = transform.serialize(
      Temporal.ZonedDateTime.from('2020-08-05T20:06:13+05:45[+05:45]')
    );
    assert.strictEqual(str, '2020-08-05T20:06:13+05:45[+05:45]');
  });
});
