import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { Temporal } from '@js-temporal/polyfill';

module('Integration | Helper | temporal-format', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders an Temporal.Instant', async function (assert) {
    this.set('value', Temporal.Instant.from('1969-07-20T20:17Z'));
    await render(hbs`{{temporal-format this.value locale="de-DE"}}`);
    assert.dom(this.element).hasText('20.7.1969, 21:17:00');
  });

  test('providing individual option will only overwrite that individual option', async function (assert) {
    this.set('value', Temporal.Instant.from('1969-07-03T20:17Z'));
    await render(
      hbs`{{temporal-format this.value locale="de-DE" day="2-digit"}}`
    );
    assert.dom(this.element).hasText('03.7.1969, 21:17:00');
  });

  test('providing options will overwrite all options', async function (assert) {
    this.set('value', Temporal.Instant.from('1969-07-03T20:17Z'));
    await render(
      hbs`{{temporal-format this.value locale="de-DE" options=(hash day="2-digit")}}`
    );
    assert.dom(this.element).hasText('03');
  });

  test('overwriting an individual option on the service works', async function (assert) {
    this.set('value', Temporal.Instant.from('1969-07-03T20:17Z'));
    this.owner.lookup('service:temporal').options.day = '2-digit';
    await render(hbs`{{temporal-format this.value locale="de-DE"}}`);
    assert.dom(this.element).hasText('03.7.1969, 21:17:00');
  });

  test('replacing all options on the service works', async function (assert) {
    this.set('value', Temporal.Instant.from('1969-07-03T20:17Z'));
    this.owner.lookup('service:temporal').options = { day: '2-digit' };
    await render(hbs`{{temporal-format this.value locale="de-DE"}}`);
    assert.dom(this.element).hasText('03');
  });

  test('it renders an Temporal.ZonedDateTime', async function (assert) {
    this.set(
      'value',
      Temporal.ZonedDateTime.from({
        timeZone: 'America/Los_Angeles',
        year: 1995,
        month: 12,
        day: 7,
        hour: 3,
        minute: 24,
        second: 30,
        millisecond: 0,
        microsecond: 3,
        nanosecond: 500,
      })
    );
    await render(hbs`{{temporal-format this.value locale="de-DE"}}`);
    assert.dom(this.element).hasText('7.12.1995, 03:24:30 GMT-8');
  });

  test('it renders an Temporal.PlainDate', async function (assert) {
    this.set(
      'value',
      Temporal.PlainDate.from({ year: 2006, month: 8, day: 24 })
    );
    await render(hbs`{{temporal-format this.value locale="de-DE"}}`);
    assert.dom(this.element).hasText('24.8.2006');
  });

  test('it renders an Temporal.PlainTime', async function (assert) {
    this.set(
      'value',
      Temporal.PlainTime.from({
        hour: 19,
        minute: 39,
        second: 9,
        millisecond: 68,
        microsecond: 346,
        nanosecond: 205,
      })
    );
    await render(hbs`{{temporal-format this.value locale="de-DE"}}`);
    assert.dom(this.element).hasText('19:39:09');
  });

  test('it renders an Temporal.PlainDateTime', async function (assert) {
    this.set(
      'value',
      Temporal.PlainDateTime.from({
        year: 1995,
        month: 12,
        day: 7,
        hour: 15,
      })
    );
    await render(hbs`{{temporal-format this.value locale="de-DE"}}`);
    assert.dom(this.element).hasText('7.12.1995, 15:00:00');
  });

  test('it renders an Temporal.PlainYearMonth', async function (assert) {
    this.set(
      'value',
      Temporal.PlainYearMonth.from({
        year: 2020,
        month: 10,
        calendar: 'gregory',
      })
    );
    await render(hbs`{{temporal-format this.value}}`);
    assert.dom(this.element).hasText('10.2020');
  });

  test('it renders an Temporal.PlainMonthDay', async function (assert) {
    this.set(
      'value',
      Temporal.PlainMonthDay.from({
        monthCode: 'M07',
        day: 14,
        calendar: 'gregory',
      })
    );
    await render(hbs`{{temporal-format this.value locale="de-DE"}}`);
    assert.dom(this.element).hasText('14.7.');
  });

  test('it renders an Temporal.Duration', async function (assert) {
    this.set(
      'value',
      Temporal.Duration.from({
        hours: 5,
        minutes: 20,
      })
    );
    await render(hbs`{{temporal-format this.value locale="de-DE"}}`);
    assert.dom(this.element).hasText('PT5H20M');
  });
});
