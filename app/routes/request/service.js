import Route from '@ember/routing/route';
import { set } from '@ember/object';
import { service } from '@ember/service';
import ENV from '../../config/environment';

export default class RequestServiceRoute extends Route {
  @service store;

  model() {
    this.store.wizardSteps.forEach((step) => {
      set(step, 'info', []);
    });
    return this.store.query('cptCodes', {
      filter: {
        clinicianId: `${ENV.clinicianId}`,
      },
    });
  }
}
