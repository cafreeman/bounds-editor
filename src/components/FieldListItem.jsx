import React, { PropTypes as P } from 'react';
import { observer } from 'mobx-react';
import BoundItemContainer from './BoundItemContainer';
import Select from './Select';

function FieldListItem({ field, options }) {
  const handleDelete = () => field.delete();
  const handleEdit = (v) => field.update('bound', v);
  const onSelect = (v) => field.update('type', v);

  return (
    <div className="panel panel-primary">
      <div className="panel-heading ">
        <h2 className="panel-title">{field.fieldName}
          <a href="#" className="pull-right" onClick={handleDelete}>
            <span className="glyphicon glyphicon-remove"></span>
          </a>
        </h2>
      </div>
      <div className="panel-body">
        <ul className="list-unstyled">
          <li>
            <BoundItemContainer
              bound={field.bound}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          </li>
          <li>
            <Select
              value={field.type}
              options={options}
              onChange={onSelect}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

FieldListItem.propTypes = {
  field: P.object.isRequired,
  options: P.array.isRequired,
};

export default observer(FieldListItem);
