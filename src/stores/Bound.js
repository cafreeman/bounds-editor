import { observable } from 'mobx';

class Bound {
  @observable lowerBound;
  @observable upperBound;

  constructor(field, lowerBound = 0, upperBound = Infinity) {
    this.field = field;
    this.lowerBound = lowerBound;
    this.upperBound = upperBound;
  }
}

export default Bound;
