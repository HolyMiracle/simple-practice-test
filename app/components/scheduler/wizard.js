import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SchedulerWizardComponent extends Component {
  @service router;
  @service store;

  @tracked steps = this.store.wizardSteps;

  get currentRoute() {
    return this.router.currentRoute.name;
  }
}
