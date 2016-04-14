import React, { PropTypes as P } from 'react';
import { observer } from 'mobx-react';

function BoundItemView({ bound, onClick }) {
  const showUpperBound = () => (bound.upperBound ? `<= ${bound.upperBound}` : '');
  return (
    <div className="clearfix bound-item-view" onClick={onClick}>
      <h4>{bound.lowerBound} &lt;= {bound.field} { showUpperBound() }
        {/*<button type="button" className="btn btn-danger pull-right" onClick={onDelete}>X</button>*/}
      </h4>
    </div>
  );
}

BoundItemView.propTypes = {
  bound: P.object.isRequired,
  onClick: P.func.isRequired,
  // onDelete: P.func.isRequired,
};

export default observer(BoundItemView);
