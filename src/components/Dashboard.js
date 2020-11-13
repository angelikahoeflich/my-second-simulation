import React, { Component } from 'react'
import {connect} from 'react-redux';
import axios from 'axios';
import {initialState} from '../ducks/reducer';

export class Dashboard extends Component {
  constructor(){
    super()

    this.state = {
      posts: [],
      userPosts: true,
      search: ""
    }

  }

  toggleSwitch = () => {
    this.setState({
      userPosts: !this.state.userPosts
    })
  }
  
  getPosts = async () => {
    let { id } = this.props.user;
    
   
    // let posts = await ;


  }
  

  render() {

    const mappedPosts = this.state.posts.map(post => { 
       return(<li>
        {post.title}{post.username}
        {post.profile_pic}
        </li>)
    })

    return (
      <div>
        <h1>Dashboard</h1>
        <label for="search">Search</label>
        <input type="text"/>
        <button>Search</button>
        <button onClick={(e) => {
          this.props.dispatch({type:"UPDATE_POSTS"});
          console.log("this.props.dispatch?", this.props.dispatch);
          }}>Reset</button>

        <input onChange={this.toggleSwitch} type="checkbox" value={this.state.userPosts}/>
        <label for="userPosts">My Posts</label>
        
        <ul>
        {mappedPosts}
        </ul>

      </div>
    )
  }
}


const mapStateToProps = state => state;

export default connect(mapStateToProps)(Dashboard);
