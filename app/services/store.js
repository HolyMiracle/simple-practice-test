import Store from '@ember-data/store';
import { tracked } from '@glimmer/tracking';

export default class MyStore extends Store {
  @tracked selectedService = {};
  @tracked selectedLocation = {};
  @tracked wizardSteps = [
    {
      name: 'Select a service',
      route: 'request.service',
      info: [],
    },
    {
      name: 'Select a location',
      route: 'request.location',
      info: [],
    },
    {
      name: 'Success',
      route: 'request.success',
      info: [],
    },
  ];
}
