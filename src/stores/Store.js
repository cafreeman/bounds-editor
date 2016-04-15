import { observable, computed, autorun } from 'mobx';

class Store {
  @observable currentIndex = null;
  @observable editorValue = '';

  // Usually backed by Alteryx data items
  @observable constraints = [];
  @observable fieldNames;
  @observable objective = '';

  constructor(fieldNames = '', fieldStore) {
    this.fieldNames = fieldNames;
    this.fieldStore = fieldStore;

    autorun(() => { this.selectedField = this.fieldNameArray[0]; });
  }

  @computed get numConstraints() {
    return this.constraints.length;
  }

  @computed get isEditorEmpty() {
    return this.editorValue === '';
  }

  // @computed get saveOrAdd() {
  //   return this.currentIndex === null ? 'Add' : 'Save';
  // }

  @computed get saveOrAdd() {
    return this.currentIndex === null;
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
    return this.fieldNames.split(',')
      .map(fieldName => fieldName.trim())
      // Dedupe the result from map by comparing lowercase forms of each element
      .reduce((acc, elem) => (acc.map(v => v.toLowerCase()).includes(elem.toLowerCase()) ?
        acc :
        acc.concat(elem)),
        [] // Use an empty array as the start value
      );
  }
}

export default Store;
