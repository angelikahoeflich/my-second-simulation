import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class Nav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("this.props.location:", this.props.location)
    return (
      <div>
        <h1>NavBar</h1>
        <Link to='/dashboard'><button>HOME</button></Link>
        <Link to="/new"><button>NEW POST</button></Link>
        <Link to="/auth"><button>LOGOUT</button></Link>
        
      </div>
    )
  }
}

export default Nav;
