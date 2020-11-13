import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

export class Nav extends Component {
  constructor(props) {
    super(props);
    console.log("Nav's props?:", props);
  }
  render() {
    console.log("this.props.location:", this.props.location)
    return (
      <div>
        <h1>NavBar</h1>
        <span>name:{this.props.username}</span>
        <span>pic:{this.props.profile_pic}</span>
        <br/>
        <Link to='/dashboard'><button>HOME</button></Link>
        <Link to="/new"><button>NEW POST</button></Link>
        <Link to="/auth"><button>LOGOUT</button></Link>
        
      </div>
    )
  }
}

// const mapStateToProps = state => state
export default connect(state => state)(Nav); 
