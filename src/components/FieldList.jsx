import React, { PropTypes as P } from 'react';
import { observer } from 'mobx-react';
import FieldListItem from './FieldListItem';

function FieldList({ store }) {
  const handleAdd = () => store.fieldNameArray.forEach(field => store.fieldStore.addField(field));

  return (
    <div>
      <button className="btn btn-default" onClick={handleAdd}>Add</button>
      <div className="panel-group">
        {
          store.fieldStore.fields.map((field) => (
            <FieldListItem
              key={field.id}
              field={field}
              options={store.fieldStore.fieldTypes}
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
