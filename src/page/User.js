import React, { Component } from 'react';
import Layout from '../components/Layout';

class User extends Component {
  render() {
    return (
      <Layout showTopBar={false} showBottomBar={true} title='test'>
        {
          (
            <div>
              <h3>UserPage</h3>
            </div>
          )
        }
      </Layout>
    );
  }
}

export default User;