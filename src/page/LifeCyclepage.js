import React, { Component } from 'react';

class LifeCyclepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', 'nextProps', nextProps, 'nextState', nextState);
    return true
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  clickCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h3>LifeCyclepage</h3>
        <p>{count}</p>
        <button onClick={this.clickCount}>+1</button>
      </div>
    );
  }
}

LifeCyclepage.propTypes = {

};

export default LifeCyclepage;