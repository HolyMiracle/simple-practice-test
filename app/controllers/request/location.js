import Controller from '@ember/controller';
import { action, set } from '@ember/object';
import { service } from '@ember/service';

export default class RequestLocationController extends Controller {
  @service store;
  @service router;

  @action
  async onLocationSelect(id) {
    const selectedLocation = this.store.peekRecord('offices', id);
    this.store.selectedLocation = selectedLocation;
    this.store.wizardSteps.forEach((step) => {
      if (step.route === 'request.location') {
        set(step, 'info', [selectedLocation.name, selectedLocation.phone]);
      }
    });
    this.router.transitionTo('/request/success');
  }
}
