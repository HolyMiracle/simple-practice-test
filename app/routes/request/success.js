import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class RequestSuccessRoute extends Route {
  @service store;
  @service router;

  beforeModel() {
    if (this.store.selectedLocation.id === undefined) {
      this.router.transitionTo('/request/service');
    }
  }
}
