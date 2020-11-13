const { genSaltSync, hashSync } = require("bcrypt");
const bcrypt = require('bcrypt');


module.exports = {


  register: async(req, res) => {
    const {username, password} = req.body;
    const db = req.app.get('db');

    console.log("Checking db for user:", username);
    const foundUser = await db.check_username(username);

    if(foundUser[0]){
      return res.status(400).send('Username already registered')
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const [newUser] = await db.add_user([username, hash]);

    req.session.user = {
      userId: newUser.user_id,
      username: newUser.username
    }
    res.status(200).send(req.session.user);

  },

  login: async(req, res) => {
   
    const {username, password} = req.body;
    const db = req.app.get('db');
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const foundUser = await db.login_user(username, hash);

    console.log("Found user!", foundUser)

    if(foundUser[0]){
      return res.status(200).send('username is here')
    }



    req.session.user = {
      userId: newUser.user_id,
      username: newUser.username
    }
    res.status(200).send(req.session.user);

  },

  getPosts: async (req, res) => {
    const {id} = req.params;
    const {userposts, search} = req.query;
    const db = req.app.get('db');

    if (userposts && search) {
      let foundPosts = await db.user_posts_with_search(id, search);
      res.json(foundPosts);
    } else if (!userposts && !search) {
      let otherUsersPosts = await db.other_users_posts(id);
      res.json(otherUsersPosts);
    } else if (!userposts && search) {
      let otherUsersFoundPosts = await db.other_users_posts_with_search(id, search);
      res.json(otherUsersFoundPosts);
    }
    
  }

 
}