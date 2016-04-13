import React from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Layout from './Layout';

@observer
class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = props.store;
  }

  onEditorChange = (e) => {
    this.store.editorValue = e.target.value;
  }

  onFieldNameChange = (e) => {
    this.store.fieldNames = e.target.value;
    console.log(this.store.fieldNameArray);
  }

  render() {
    return (
      <div className="container">
        <DevTools />
        <div className="col-md-8 col-md-offset-2">
          <DevTools />
          <textarea
            className="form-control"
            value={this.store.fieldNames}
            onChange={this.onFieldNameChange}
          />
          <h3>This is the text editor</h3>
          <textarea
            className="form-control"
            value={this.store.editorValue}
            onChange={this.onEditorChange}
          />
          <br />
          <Layout store={this.store} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  store: React.PropTypes.object,
};

export default App;
