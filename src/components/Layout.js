import React, { Component } from 'react';
import BottomBar from './BottomBar';
import TopBar from './TopBar';

class Layout extends Component {
  componentDidMount() {
    const { title = "My BMW" } = this.props
    document.title = title;
  }
  render() {
    const {children, showTopBar, showBottomBar} = this.props
    console.log('children', children);
    return (
      <div>
        {showTopBar && <TopBar />}
        {children}
        {showBottomBar && <BottomBar />}
      </div>
    );
  }
}

export default Layout;