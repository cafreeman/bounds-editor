import { observable, extendObservable } from 'mobx';
import uuid from 'node-uuid';

class Field {
  @observable fieldName;
  @observable type = 'Continuous';

  constructor(store, fieldName) {
    this.store = store;
    this.fieldName = fieldName;
    this.id = uuid.v4();
    // Create a `bound` object composed of defaults and the field name when an instance is created.
    extendObservable(this, {
      bound: {
        field: fieldName,
        lowerBound: 0,
        upperBound: null,
      },
    });
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
    this.fields.push(
      new Field(this, name)
    );
  }

  deleteField(field) {
    this.fields.splice(this.fields.indexOf(field), 1);
  }
}

export default FieldStore;
