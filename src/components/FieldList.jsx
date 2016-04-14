import React, { PropTypes as P } from 'react';
import { observer } from 'mobx-react';
// import { observable } from 'mobx';
import FieldListItem from './FieldListItem';

function FieldList({ store }) {
  const handleAdd = () => store.addField(Math.random().toString());

  return (
    <div>
      <button className="btn btn-default" onClick={handleAdd}>Add</button>
      <div className="panel-group">
        {
          store.fields.map((field) => (
            <FieldListItem
              key={field.id}
              field={field}
              options={store.fieldTypes}
            />
          ))
        }
      </div>
    </div>
  );
}

FieldList.propTypes = {
  store: P.object.isRequired,
};

export default observer(FieldList);
