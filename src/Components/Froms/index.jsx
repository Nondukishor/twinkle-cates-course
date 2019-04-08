import React, { Component } from 'react';
import PostFrom from './PostFrom';

class FormExample extends Component {
    state = {  }
    render() {
        return (
            <div className="container">
                <div className="row">
                <div className="col col-sm">
                <PostFrom/>
                </div>
                </div>
            </div>
        );
    }
}

export default FormExample;