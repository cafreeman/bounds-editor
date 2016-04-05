import React from 'react';
import { observer } from 'mobx-react';

function InputBound({ bound, field }) {
  const handleBoundChange = (e) => {
    bound[`${field}Bound`] = e.target.value;
  };

  return (
    <input
      type="text"
      className="form-control"
      value={bound[`${field}Bound`]}
      onChange={handleBoundChange}
      placeholder={`${field.charAt(0).toUpperCase() + field.substr(1)} Bound`}
    />
  );
}

InputBound.propTypes = {
  bound: React.PropTypes.object.isRequired,
  field: React.PropTypes.string.isRequired,
};

export default observer(InputBound);
