import React, { Component } from 'react';
class ListBooks extends Component {

    render() {
        return (
            <li className="list-group-item d-flex" key={this.props.id}>
            <p>{this.props.name}</p>
            <span className="ml-auto">{this.props.price}</span>
            </li>
        );
    }
}

export default ListBooks;