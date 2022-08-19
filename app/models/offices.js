import Model, { attr } from '@ember-data/model';

export default class OfficesModel extends Model {
  @attr('string') name;
  @attr('string') phone;
  @attr('boolean') isVideo;
  @attr('boolean') isPublic;
}
