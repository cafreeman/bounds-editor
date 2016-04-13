import { observable, computed, autorun } from 'mobx';

class Store {
  @observable currentIndex = null;
  @observable bounds = [];
  @observable selectedField;
  @observable editorValue = '';

  // Usually backed by Alteryx data items
  @observable constraints = [];
  @observable fieldNames = '';

  constructor(fieldNames) {
    // this.fieldNames = fieldNames;

    autorun(() => { this.selectedField = this.fieldNameArray[0]; });
  }

  @computed get numConstraints() {
    return this.constraints.length;
  }

  @computed get isEditorEmpty() {
    return this.editorValue === '';
  }

  @computed get saveOrAdd() {
    return this.currentIndex === null ? 'Add' : 'Save';
  }

  update() {
    this.editorValue = '';
    this.currentIndex = null;
    // this.updateAlteryxDataItems();
  }

  addConstraint() {
    this.currentIndex = this.numConstraints;
    this.saveConstraint();
  }

  saveConstraint() {
    this.constraints[this.currentIndex] = this.editorValue;
    this.update();
  }

  editConstraint(idx) {
    console.log(`editing ${idx}`);
    this.currentIndex = idx;
    this.editorValue = this.constraints[this.currentIndex];
    // this.update();
    // this.updateAlteryxDataItems();
  }

  removeConstraint(idx) {
    this.constraints.splice(idx, 1);
    this.update();
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
