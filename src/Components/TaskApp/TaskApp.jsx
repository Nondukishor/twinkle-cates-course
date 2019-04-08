import React, { Component } from "react";

class TaskApp extends Component {
  state = {
    task: ""
  };

  addTask = event => {
    console.log("====================================");
    console.log(event.target);
    console.log("====================================");
  };

  inputHandler = event => {
   this.setState({task:event.target.value})
  };
  render() {
    return (
      <div>
        <input onChange={this.inputHandler} type="text" value={this.state.task} placeholder="Enter you Task" />
        <button onClick={this.addTask}>Add Task</button>
        {this.state.task? <p>Your Task ...... {this.state.task}</p>: " "}
      </div>
    );
  }
}

export default TaskApp;
