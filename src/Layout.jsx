import React, { PropTypes as P } from 'react';
import { observer } from 'mobx-react';
import ConstraintList from './components/ConstraintList';
import BoundsEditor from './components/BoundsEditor';
// import TypeSelector from './components/TypeSelector';
import FieldList from './components/FieldList';
import Objective from './components/Objective';

function Layout({ store }) {
  return (
    <div>
        <Objective label="Objective" store={store} />
        <FieldList label="Fields" store={store} />
        <ConstraintList label="Constraints" store={store} />
    </div>
  );
}

Layout.propTypes = {
  store: P.object.isRequired,
};

export default observer(Layout);
