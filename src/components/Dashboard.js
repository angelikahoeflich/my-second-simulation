import React, { Component } from 'react'

export class Dashboard extends Component {
  constructor(){
    super()

    this.state = {
      myPosts: true
    }
  }
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <label for="search">Search</label>
        <input type="text"/>
        <button>Search</button>
        <button>Reset</button>

        <input type="checkbox"/>
        <label for="myPosts">My Posts</label>

      </div>
    )
  }
}

export default Dashboard
