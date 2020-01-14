import React from 'react';
import Aux from '../../hoc/Auxilary';
import Classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = props => {
  return (
    <Aux>
      <Toolbar />
      <SideDrawer />
      <main className={Classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
}

export default layout;