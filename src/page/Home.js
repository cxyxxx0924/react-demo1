import React, { Component } from 'react';
import Layout from '../components/Layout';

class Home extends Component {
  render() {
    return (
      <Layout title='My BMW Home' showTopBar={true} showBottomBar={false}>
        <p>Home</p>
        <p>show time</p>
      </Layout>
    );
  }
}

export default Home;