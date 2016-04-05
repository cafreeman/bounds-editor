import React from 'react';
import { observer } from 'mobx-react';

function Select({ style, options, onChange }) {
  return (
    <select
      style={ style }
      className="form-control"
      onChange={(e) => onChange(e.target.value)}
    >
      {
        options.map((option, idx) => (
          <option key={idx} value={option}>{option}</option>)
        )
      }
    </select>
  );
}

Select.propTypes = {
  options: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired,
  style: React.PropTypes.object,
};

export default observer(Select);
