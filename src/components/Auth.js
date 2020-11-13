import React, { Component } from 'react'
import Axios from 'axios';

export class Auth extends Component {
  constructor(){
    super()

    this.state = {
        username: '',
        password: ''
    }

  }


  handleUsername = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }


  register = async (e) => {
    e.preventDefault();
    const {username, password} = this.state;
    try{
      const user = await Axios.post('/api/auth/register', {username, password})
      // this.props.ADD_STUFF_LATER(user.data);
      // this.props.history.push('/feed')
    } 
    catch(err){
        alert(err.response.request.response)
    }
  }
  login = async (e) => {
    e.preventDefault();
    const {username, password} = this.state;
    try{
      const user = await Axios.post('/api/auth/login', {username, password})
      // this.props.ADD_STUFF_LATER(user.data);
      // this.props.history.push('/feed')
    } 
    catch(err){
        alert(err.response.request.response)
    }
  }


  render() {
    return (
      <div>
        <h1>Auth</h1>
        <label for="name">Username</label>
        <input name="username" onChange={this.handleUsername}/>
        <label for="name" >Password</label>
        <input name="password" type="password" onChange={this.handlePassword} />

        <button onClick={this.login}>Login</button>
        <button onClick={this.register}>Register</button>



      </div>
    )
  }
}

export default Auth
