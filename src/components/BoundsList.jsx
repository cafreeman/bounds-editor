import React from 'react';
import { observer } from 'mobx-react';
import BoundItem from './BoundItem';

function BoundsList({ store }) {
  const onDelete = () => console.log('delete');

  return (
    <div className="list-group">
      { store.bounds.map((bound, idx) => <BoundItem key={idx} bound={bound} onDelete={onDelete}/>) }
    </div>
  );
}

BoundsList.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default observer(BoundsList);
