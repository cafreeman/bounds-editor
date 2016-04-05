import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import InputBound from './InputBound';

@observer
class BoundItem extends React.Component {
  static propTypes = {
    bound: React.PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.bound = props.bound;
    this.onDelete = props.onDelete;
  }

  @observable isEditing = false;

  toggleEditing = () => {
    this.isEditing = !this.isEditing;
  }

  saveBound = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  handleBoundChange = (e, bound) => {
    this.bound[bound] = e.target.value;
  }

  renderEdit = () => (
    <div className="list-group-item">
      <form className="form-inline">
        <InputBound bound={this.bound} field="lower" />
        <label style={{ marginLeft: 10, marginRight: 10 }}>
          <h4> &lt;= {this.bound.field} &lt;= </h4>
        </label>
        <InputBound bound={this.bound} field="upper" />
        <button type="submit" className="btn btn-success" onClick={this.saveBound}>edit</button>
        <button type="button" className="btn btn-danger" onClick={this.onDelete}>X</button>
      </form>
    </div>
  )

  renderValue = () => (
    <div className="list-group-item" onClick={this.toggleEditing}>
      <h4>{this.bound.lowerBound} &lt;= {this.bound.field} &lt;= {this.bound.upperBound}</h4>
    </div>
  )

  render() {
    return this.isEditing ? this.renderEdit() : this.renderValue();
  }
}

export default BoundItem;
