import React, { Component } from 'react'

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
        <button>Reset</button>

        <input onChange={this.toggleSwitch} type="checkbox" value={this.state.userPosts}/>
        <label for="userPosts">My Posts</label>
        <ul>
        {mappedPosts}
        </ul>

      </div>
    )
  }
}

export default Dashboard
