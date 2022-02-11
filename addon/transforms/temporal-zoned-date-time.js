import Transform from '@ember-data/serializer/transform';
import { Temporal } from '@js-temporal/polyfill';

export default class TemporalZonedDateTimeTransform extends Transform {
  deserialize(serialized) {
    return serialized && Temporal.ZonedDateTime.from(serialized);
  }

  serialize(deserialized) {
    return deserialized?.toJSON();
  }
}
