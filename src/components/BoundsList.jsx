import React from 'react';
import { observer } from 'mobx-react';
import BoundItem from './BoundItem';

function BoundsList({ store }) {
  return (
    <div className="list-group">
      { store.bounds.map((bound, idx) => (
          <BoundItem
            key={idx}
            bound={bound}
            onDelete={() => store.deleteBound(idx)}
            onEdit={(newBound) => store.editBound(idx, newBound)}
          />
        ))}
    </div>
  );
}

BoundsList.propTypes = {
  store: React.PropTypes.object.isRequired,
};

export default observer(BoundsList);
