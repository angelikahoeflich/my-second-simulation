import React, { Component } from 'react'
import {connect} from 'react-redux';
import {submitPost} from '../ducks/reducer';


export class Form extends Component {
  constructor(){
    super()

    this.state={
      title:'',
      imageURL: '',
      content: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const {name, value} = event.target
    console.log("name", name)
    console.log("value", value)

    this.setState({
      [name]:value
    })
    
  }

  newPost = (event) => {
    submitPost({
      "title": this.state.title,
      "imageURL": this.state.imageURL,
      "content": this.state.content
    });
    /*
    this.props.dispatch({
      type:"SUBMIT_POST",
      payload:{
        "title": this.state.title,
        "imageURL": this.state.imageURL,
        "content": this.state.content
      }
    })
    */
  }

  render() {
    return (
      <div>
        <input

          type="text"
          name="title"
          placeholder="title of post"
          /* value={this.state.title} */
          onChange={this.handleChange}
          />
        <input
          type="text"
          name="imageURL"
          placeholder="image url"
          onChange={this.handleChange}
          />
        <input
          type="text"
          name="content"
          placeholder="content here"
          onChange={this.handleChange}
          />
        
          <button onClick={this.newPost}>POST</button>
          
      </div>
    )
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(Form); 
