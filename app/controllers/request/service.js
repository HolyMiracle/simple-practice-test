import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action, set } from '@ember/object';

export default class RequestServiceController extends Controller {
  @service router;
  @service store;

  @action
  onServiceSelect(id) {
    const selectedService = this.store.peekRecord('cpt-codes', id);
    this.store.selectedService = selectedService;
    this.store.wizardSteps.forEach((step) => {
      if (step.route === 'request.service') {
        set(step, 'info', [
          selectedService.description,
          selectedService.duration + ' minutes',
        ]);
      }
    });
    this.router.transitionTo('/request/location');
  }
}
