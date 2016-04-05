import React from 'react';
import { observer } from 'mobx-react';
import Select from './Select';
import BoundsList from './BoundsList';

function BoundsEditor({ store }) {
  const handleSelection = store.updateSelectedField.bind(store);
  const handleClick = (e) => {
    e.preventDefault();
    store.addBound(store.selectedField);
  };

  return (
    <div>
      <form className="form-inline">
        <Select style={{ minWidth: 100 }} options={store.fieldNames} onChange={handleSelection} />
        <button className="btn btn-primary" onClick={handleClick}>+</button>
      </form>
      <br />
      <BoundsList store={store} />
    </div>
  );
}

BoundsEditor.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default observer(BoundsEditor);
