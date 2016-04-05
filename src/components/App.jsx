import React from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import BoundsEditor from './BoundsEditor';

@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
  }
  render() {
    return (
      <div className="container-fluid">
        <DevTools />
        <h3>Selected field is: {this.store.selectedField}</h3>
        <BoundsEditor store={this.store} />
      </div>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.object,
};

export default App;
