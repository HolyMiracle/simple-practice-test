import DS from 'ember-data';
import { dasherize } from '@ember/string';

export default DS.JSONAPISerializer.extend({
  modelNameFromPayloadKey(payloadKey) {
    return dasherize(payloadKey);
  },
  keyForAttribute(key, method) {
    return key;
  },
});
