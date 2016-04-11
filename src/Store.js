import { observable, computed } from 'mobx';

class Store {
  @observable bounds = [];
  @observable selectedField;
  @observable fieldNames;

  constructor(fieldNames) {
    this.fieldNames = fieldNames;
    this.selectedField = this.fieldNameArray[0];
  }

  @computed get fieldNameArray() {
    return this.fieldNames.split(',').map(fieldName => fieldName.trim());
  }

  @computed get remainingFields() {
    return this.fieldNameArray
      .filter(field => !this.bounds.map(bound => bound.field).includes(field));
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
    this.selectedField = this.remainingFields[0];
  }

  editBound(idx, newBound) {
    this.bounds[idx] = newBound;
  }

  deleteBound(idx) {
    this.bounds.splice(idx, 1);
    this.selectedField = this.remainingFields[0];
  }
}

export default Store;
