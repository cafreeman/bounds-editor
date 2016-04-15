import { observable, extendObservable } from 'mobx';
import uuid from 'node-uuid';

class Field {
  @observable fieldName;
  @observable type = 'Continuous';
  @observable bound = {
    field: null,
    lowerBound: 0,
    upperBound: null,
  }

  constructor(store, fieldName) {
    this.store = store;
    this.fieldName = fieldName;
    this.id = uuid.v4();
    // Set the field name of the bound element at instantiation
    this.bound.field = fieldName;
    // Create a `bound` object composed of defaults and the field name when an instance is created.
  }

  update(prop, value) {
    this[prop] = value;
  }

  delete() {
    console.log('deleting!');
    this.store.deleteField(this);
  }
}

class FieldStore {
  fieldTypes = ['Continuous', 'Binary', 'General'];
  @observable fields = [];

  addField(name) {
    // only add a field if `name` was provided
    if (name) {
      // Check if a field with the given name already exists
      if (this.fields.every(field => field.fieldName !== name)) {
        this.fields.push(
          new Field(this, name)
        );
      }
    }
  }

  deleteField(field) {
    this.fields.splice(this.fields.indexOf(field), 1);
  }
}

export default FieldStore;
