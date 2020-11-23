import axios from 'axios';
const initialState = {
  user: {
    username: '',
    id: 0,
    profile_pic: ''
  },
  posts: [
    {
      title: "Title of Post",
      profile_pic: "https://example.com/a.jpg",
      username: "angelika",
      imageURL: "http://asdf.com/asdf.jpg",
      content: "There is content!"
    }
  ]
}

const LOGIN_USER = "LOGIN_USER";
const UPDATE_POSTS = "UPDATE_POSTS";
const SUBMIT_POST = "SUBMIT_POST";
const LOGOUT_USER = "LOGOUT_USER";

export function loginUser(user){
  return {
    type: LOGIN_USER,
    payload: user
  }
}
export function submitPost(post) {
  console.log("post?", post);

  return {
    type: SUBMIT_POST,
    payload: post
  }
}

export function updatePosts(){

  console.log("Is this thing on? wtf!?");

  axios.get(`/api/posts/${this.state.user.id}`, {params: {search: this.state.search}})
  .then(posts => {
    console.log("Did we get posts from express?:", posts);
    return {
      type: UPDATE_POSTS,
      payload: posts
    }
  })
  
}
 export function logoutUser(){
   axios.post('/api/auth/logout')
   .then(user => {
      console.log(user)
   })
 }



export default function reducer(state = initialState, action){
  console.log("Reducer? state:", state);
  console.log("Reducer? action:", action);
  switch(action.type){
    case LOGIN_USER:
      return {...state, user:action.payload}

    case UPDATE_POSTS:
      console.log("got the payload:", action.payload);
      return {
        ...state,
        posts: action.payload
      }

    case LOGOUT_USER: 
        return {
          initialState
        }
    
    case SUBMIT_POST:
      console.log("SUBMIT_POST action is firing!!!")
      return {
        ...state,
        posts: [...this.state.posts, action.payload]
      }

  default:
    return state
  }

}