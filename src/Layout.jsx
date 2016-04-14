import React, { PropTypes as P } from 'react';
import { observer } from 'mobx-react';
import ConstraintList from './components/ConstraintList';
import BoundsEditor from './components/BoundsEditor';
// import TypeSelector from './components/TypeSelector';
import FieldList from './components/FieldList';

function Layout({ store, fieldStore }) {
  return (
    <div>
      <FieldList store={fieldStore} />
      <h4>Add Constraints</h4>
      <ConstraintList store={store} />
      {/*<BoundsEditor store={store} />*/}
      {/*<TypeSelector />*/}
    </div>
  );
}

Layout.propTypes = {
  store: P.object.isRequired,
};

export default observer(Layout);
