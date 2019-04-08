import React, { Component } from "react";

class ComponentLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("====================================");
    console.log("This is constructor");
    console.log("====================================");
  }

  componentDidMount() {
    console.log("====================================");
    console.log("This is componentDidMount");
    console.log("====================================");
  }

  componentWillUnmount() {
    console.log("====================================");
    console.log("this ComponentWillMount");
    console.log("====================================");
  }
  componentDidUpdate(){
      console.log('====================================');
      console.log("This is Update method");
      console.log('====================================');
  }

  render() {
    console.log("====================================");
    console.log("This is render method");
    console.log("====================================");
    return <div />;
  }
}

export default ComponentLifeCycle;
