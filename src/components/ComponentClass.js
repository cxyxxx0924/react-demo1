import React, { Component } from 'react';

class ComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0,
      date: new Date().toLocaleTimeString()
    }
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString()
      })
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  clickBtn = () => {
    this.changeValue(1);
    this.changeValue(2);
  }
  changeValue = v => {
    this.setState(state => ({
      count: state.count + v
    }))
    // this.setState({
    //   count: this.state.count + v
    // })
  }
  render() {
    const {count, date} = this.state
    return (
      <div>
        <p>CompontClass</p>
        <p>{date}</p>
        <button onClick={this.clickBtn}>{count}</button>

      </div>
    );
    // function clickBtn() {
    //   this.setState({
    //     count: this.state.count+1
    //   })
    // }
  }
}

export default ComponentClass;