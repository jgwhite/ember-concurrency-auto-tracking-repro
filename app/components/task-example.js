import Component from "@glimmer/component";
import { timeout } from "ember-concurrency";
import { task } from "ember-concurrency-decorators";

export default class AutoTrackingExampleComponent extends Component {
  constructor() {
    super(...arguments);
  }

  get result() {
    return this.task.last?.value;
  }

  @task
  *task(t = 0) {
    if (t) {
      yield timeout(t);
    }
    return Math.random();
  }
}
