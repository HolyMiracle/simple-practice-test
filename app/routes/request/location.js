import Route from '@ember/routing/route';
import ENV from '../../config/environment';
import { service } from '@ember/service';

export default class RequestLocationRoute extends Route {
  @service store;
  @service router;

  beforeModel() {
    if (this.store.selectedService.id === undefined) {
      this.router.transitionTo('/request/service');
    }
  }

  model() {
    const service = this.store.selectedService;

    return this.store.query('offices', {
      filter: {
        clinicianId: `${ENV.clinicianId}`,
        cptCodeId: service.id,
      },
    });
  }
}
