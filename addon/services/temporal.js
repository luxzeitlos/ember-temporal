import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { Temporal } from '@js-temporal/polyfill';

// we use a Options class so that individual properties are tracked.
// users of the library may replace the entire options object, but this provides good defaults
// without relaying on tracked objects as another dependency
class Options {
  @tracked weekday = undefined;
  @tracked era = undefined;
  @tracked year = 'numeric';
  @tracked month = 'numeric';
  @tracked day = 'numeric';
  @tracked dayPeriod = undefined;
  @tracked hour = 'numeric';
  @tracked minute = 'numeric';
  @tracked second = 'numeric';
  @tracked fractionalSecondDigits = undefined;
  @tracked timeZoneName = undefined;
}

export default class TemporalService extends Service {
  @tracked __defaultLocales = 'default';
  @tracked __defaultOptions = new Options();

  get options() {
    return this.__defaultOptions;
  }

  set options(value) {
    this.__defaultOptions = value;
  }

  get locales() {
    return this.__defaultLocales;
  }

  set locales(value) {
    this.__defaultLocales = value;
  }

  get locale() {
    return this.locales;
  }

  set locale(value) {
    this.locales = value;
  }

  get optionsForInstant() {
    return this.options;
  }

  get optionsForZonedDateTime() {
    return {
      ...this.extractOptions(this.options),
      timeZoneName: 'short',
    };
  }

  get optionsForPlainDate() {
    return this.options;
  }

  get optionsForPlainTime() {
    return this.options;
  }

  get optionsForPlainDateTime() {
    return this.options;
  }

  get optionsForPlainYearMonth() {
    return this.options;
  }

  get optionsForPlainMonthDay() {
    return this.options;
  }

  get optionsForDuration() {
    return this.options;
  }

  extractOptions(data) {
    const options = { ...data };
    for (const optionName of [
      'weekday',
      'era',
      'year',
      'month',
      'day',
      'dayPeriod',
      'hour',
      'minute',
      'second',
      'fractionalSecondDigits',
      'timeZoneName',
    ]) {
      if (data[optionName]) {
        options[optionName] = data[optionName];
      }
    }
    return options;
  }

  getOptions(value) {
    let options = this.options;

    if (value instanceof Temporal.Instant) {
      options = this.optionsForInstant;
    } else if (value instanceof Temporal.ZonedDateTime) {
      options = this.optionsForZonedDateTime;
    } else if (value instanceof Temporal.PlainDate) {
      options = this.optionsForPlainDate;
    } else if (value instanceof Temporal.PlainTime) {
      options = this.optionsForPlainTime;
    } else if (value instanceof Temporal.PlainDateTime) {
      options = this.optionsForPlainDateTime;
    } else if (value instanceof Temporal.PlainYearMonth) {
      options = this.optionsForPlainYearMonth;
    } else if (value instanceof Temporal.PlainMonthDay) {
      options = this.optionsForPlainMonthDay;
    } else if (value instanceof Temporal.Duration) {
      options = this.optionsForDuration;
    }

    return this.extractOptions(options);
  }
}
