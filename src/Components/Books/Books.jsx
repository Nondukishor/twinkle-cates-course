import React, { Component } from 'react';
import ListBooks from './ListBooks';

class Books extends Component {
    state = { 
        books:[
            {
                name:'javascript',
                price:459,
                id:1,
            },
            {
                name:"Reactjs",
                price:10000,
                id:2
            },
            {
                name:"Es6",
                price:80,
                id:3
            },
            {
                name:"Redux",
                price:80,
                id:78
            }
        ]
     }
    render() {
        return (
            <div>
                {this.state.books.map((book)=><ListBooks name={book.name} price={book.price} id={book.id} key={book.id}/>)}
            </div>
        );
    }
}

export default Books;