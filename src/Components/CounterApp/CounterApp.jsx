import React, { Component } from 'react';

class CounterApp extends Component {
    state = { 
        count:0
     }

     decrement = () => this.setState({count:this.state.count-1})
     increment = () => this.setState({count:this.state.count+1})
    
     
    
    render() {
        return (
            <div>
                <button onClick={this.decrement}>-</button>
                <div>{this.state.count}</div>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}

export default CounterApp;