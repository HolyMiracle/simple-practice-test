import EmberRouter from '@ember/routing/router';
import config from 'simple-practice-test/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('request', function () {
    this.route('service');
    this.route('location');
    this.route('success');
  });
});
