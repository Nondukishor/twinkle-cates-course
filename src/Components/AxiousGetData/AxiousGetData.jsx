import React, { Component } from 'react';
import './AxiosGetData.css'
import axios from 'axios';

class AxiousGetData extends Component {
    state = {
        posts: []
      };
    
      componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
          .then(response => {
            this.setState({
              posts: response.data
            });
          })
          .catch(error => console.log(error));
      }
    
      render() {
        const  { posts } = this.state;
        
        if (posts.length === 0) {
          return (
            <div className="spinner text-center">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
          </div>
          );
        } else {
          return (
            <div className="App">
              <ul className="list-gourp">
                {posts.map(post => (
                  <li key={post.id} className="list-group-item">
                   <h1>{post.title}</h1>
                   <p className="text-success">{post.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      }
}

export default AxiousGetData;
