import React, { Component } from 'react';
const inisialState={ 
    name:"",
    email:"",
    password:"",
    bio:""
 }
class PostFrom extends Component {
    constructor(){
        super();
        this.MyForm=React.createRef()
    }

    state = inisialState;

     changeHandler=(event)=>{
         this.setState({
            [event.target.name]:event.target.value
         })
     }
     submitHandler=(event)=>{
         event.preventDefault();
         console.log('====================================');
         console.log(this.state);
         console.log('====================================');
         this.setState({
             ...inisialState
         })

     }



    render() {

        return (
         <form onSubmit={this.submitHandler}>
            <div className="form-group">
                <label htmlFor="name">Eneter Your Name</label>
                <input 
                className="form-control"
                type="text" 
                placeholder="Enter Your Name"
                name="name"
                id='name'
                value={this.state.name}
                onChange={this.changeHandler}
                />
            </div>

            <div className="form-group">
                <label htmlFor="Email">Eneter Your Email</label>
                <input
                className="form-control" 
                type="email" 
                placeholder="Enter Your email"
                name="email"
                id='email'
                value={this.state.email}
                onChange={this.changeHandler}
                />
            </div>

            <div className="form-group">
                <label htmlFor="name">Eneter Your password</label>
                <input 
                className="form-control"
                type="password" 
                placeholder="Enter Your password"
                name="password"
                id='password'
                value={this.state.password}
                onChange={this.changeHandler}
                />
            </div>

            <div className="form-group">
                <label htmlFor="name">Eneter Your bio</label>
                <textarea 
                className="form-control"
                type="text" 
                placeholder="Enter Your bio"
                name="bio"
                id='bio'
                value={this.state.bio}
                onChange={this.changeHandler}
                />
            </div>
            <div className="form-group">
            <input className="btn btn-success" type="submit"/>
            </div>
         </form>
        );
    }
}

export default PostFrom;