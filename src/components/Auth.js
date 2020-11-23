import React, { Component } from 'react'
import Axios from 'axios';
import {connect} from 'react-redux';
import {loginUser} from '../ducks/reducer';

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
    console.log("Event default prevented")
    const {username, password} = this.state;
    try{
      console.log("Attempting to register...")
      const user = await Axios.post('/api/auth/register', {username, password})
      console.log("Got user?...", user)
      this.props.loginUser(user.data);
      this.props.history.push('/new')
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
      this.props.loginUser(user.data);
      this.props.history.push('/new')
      
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

const mapStateToProps = state => state
export default connect(mapStateToProps, {loginUser})(Auth)
