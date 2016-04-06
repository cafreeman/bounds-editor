import React, { PropTypes as P } from 'react';
import { observable, toJSON } from 'mobx';
import { observer } from 'mobx-react';
import InputBound from './InputBound';

@observer
class BoundItem extends React.Component {
  static propTypes = {
    bound: P.object.isRequired,
    onDelete: P.func.isRequired,
    onEdit: P.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.bound = props.bound;
    this.onDelete = props.onDelete;
    this.onEdit = props.onEdit;
  }

  @observable isEditing = false;

  toggleEditing = () => {
    this.isEditing = !this.isEditing;
  }

  handleSubmit = (e, tempBound) => {
    e.preventDefault();
    this.bound = tempBound;
    this.onEdit(tempBound);
    this.toggleEditing();
  }

  handleDelete = (e) => {
    e.stopPropagation();
    this.onDelete();
  }

  handleBoundChange = (e, tempBound, field) => {
    tempBound[field] = e.target.value;
  }

  renderEdit = () => {
    const tempBound = toJSON(this.bound);
    return (
      <div className="list-group-item">
        <form className="form-inline" onSubmit={(e) => this.handleSubmit(e, tempBound)}>
          <InputBound
            bound={tempBound}
            field="lowerBound"
            onChange={(e) => (this.handleBoundChange(e, tempBound, 'lowerBound'))}
            placeholder="Lower Bound"
          />
          <label style={{ marginLeft: 10, marginRight: 10 }}>
            <h4> &lt;= {tempBound.field} &lt;= </h4>
          </label>
          <InputBound
            bound={tempBound}
            field="upperBound"
            onChange={(e) => (this.handleBoundChange(e, tempBound, 'upperBound'))}
            placeholder="Upper Bound"
          />
          <button type="submit" className="btn btn-success">save</button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={this.toggleEditing}
          >
            cancel
          </button>
        </form>
      </div>
    );
  }

  renderValue = () => (
    <div className="list-group-item" onClick={this.toggleEditing}>
      <h4>{this.bound.lowerBound} &lt;= {this.bound.field} &lt;= {this.bound.upperBound}</h4>
      <button type="button" className="btn btn-danger" onClick={this.handleDelete}>X</button>
    </div>
  )

  render() {
    return this.isEditing ? this.renderEdit() : this.renderValue();
  }
}

export default BoundItem;
