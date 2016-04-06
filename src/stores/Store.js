import { observable, computed } from 'mobx';

class Store {
  @observable bounds = [];
  @observable selectedField;

  constructor() {
    this.fieldNames = ['x1', 'x2', 'x3'];
    this.selectedField = this.fieldNames[0];
  }

  @computed get boundsLength() {
    return this.bounds.length;
  }

  updateSelectedField(v) {
    this.selectedField = v;
  }

  addBound(field) {
    this.bounds.push({
      field,
      lowerBound: 0,
      upperBound: null,
    });
  }

  editBound(idx, newBound) {
    this.bounds[idx] = newBound;
  }

  deleteBound(idx) {
    this.bounds.splice(idx, 1);
  }
}

export default Store;
