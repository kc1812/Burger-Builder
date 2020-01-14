import React, { Component } from 'react';
import Aux from '../Auxilary/Auxilary';
import Classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: true
  }

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false })
  }
  sideDrawerTogglehandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }
  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerTogglehandler} />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
        <main className={Classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }

}

export default Layout;