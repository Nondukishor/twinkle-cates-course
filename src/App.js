import React, { Component } from 'react';
import './App.css';
// import CounterApp from './Components/CounterApp/CounterApp';
// import TaskApp from './Components/TaskApp/TaskApp';
// import Books from './Components/Books/Books';
import ComponentLifeCycle from './Components/LifeCycle/ComponentLifeCycle';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <CounterApp/>
        <TaskApp/>
        <Books/> */}
        <ComponentLifeCycle/>
      </div>
    );
  }
}

export default App;
