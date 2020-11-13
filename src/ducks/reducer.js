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
    }
  ]
}

const LOGIN_USER = "LOGIN_USER";
const UPDATE_POSTS = "UPDATE_POSTS";

export function loginUser(user){
  return {
    type: LOGIN_USER,
    payload: user
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

  default:
    return state
  }

}