import { observable, computed } from 'mobx';
import Bound from './Bound';

class Store {
  @observable bounds = [];
  @observable selectedField;

  constructor() {
    this.fieldNames = ['x1', 'x2', 'x3'];
    this.selectedField = this.fieldNames[0];
  }

  updateSelectedField(v) {
    this.selectedField = v;
  }

  addBound(field) {
    this.bounds.push(new Bound(field));
  }
}

export default Store;
