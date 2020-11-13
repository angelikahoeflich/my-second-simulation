import React, { Component } from 'react'

export class Dashboard extends Component {
  constructor(){
    super()

    this.state = {
      myPosts: true
    }

  }
  toggleSwitch = () => {
    this.setState({
      myPosts: !this.state.myPosts
    })
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <label for="search">Search</label>
        <input type="text"/>
        <button>Search</button>
        <button>Reset</button>

        <input onChange={this.toggleSwitch} stype="checkbox" value="myPosts"/>
        <label for="myPosts">My Posts</label>

      </div>
    )
  }
}

export default Dashboard
