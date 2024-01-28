const mongoose = require("mongoose");
const User = require("./models/user");
const Post = require("./models/post");
const express = require("express");
const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.get("/", (req, res) => {
  console.log("request sent");
  res.send("Hello World!");

  uploadImage("tempUser", "india", "05", "2024", "./images/test.png");
});
//get all users
app.get("/users", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((error) => res.status(400).json("Error: " + error));
});
//adding a user
app.post("/users", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const friends = req.body.friends;
  const newUser = new User({ name, password, friends });
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((error) => res.status(400).json("Error: " + error));
});
//get user by name
app.get("/users/:userName", (req, res) => {
  User.findOne({ name: req.params.userName })
    .then((user) => res.json(user))
    .catch((error) => res.status(400).json("Error: " + error));
});
//edit an individual user
app.put("/users/:userName", (req, res) => {
  User.findOne({ name: req.params.userName })
    .then((user) => {
      user.name = req.body.name || user.name;
      user.password = req.body.password || user.password;
      user.friends = req.body.friends || user.friends;
      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((error) => res.status(400).json("Error: " + error));
    })
    .catch((error) => res.status(400).json("Error: " + error));
});
//delete an individual user
app.delete("/users/:userName", (req, res) => {
  User.findOneAndDelete({ name: req.params.userName })
    .then(() => res.json("User deleted."))
    .catch((error) => res.status(400).json("Error: " + error));
});
//now for adding a friend to a user
app.put("/users/:userName/addFriend/:friend", (req, res) => {
  User.findOne({ name: req.params.userName })
    .then((user) => {
      user.friends.push(req.params.friend);
      user
        .save()
        .then(() => res.json("User updated!"))
        .catch((error) => res.status(400).json("Error: " + error));
    })
    .catch((error) => res.status(400).json("Error: " + error));
});

// routes for POSTS
//get all posts
app.get("/posts", (req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((error) => res.status(400).json("Error: " + error));
});
//adding a post
app.post("/posts", (req, res) => {
  const user = req.body.user;
  const description = req.body.description;
  const imageNameInGCB = req.body.imageNameInGCB;
  const location = req.body.location;
  const newPost = new Post({ user, description, imageNameInGCB, location });

  newPost
    .save()
    .then(() => res.json("Post added!"))
    .catch((error) => res.status(400).json("Error: " + error));
});

mongoose
  .connect(
    "mongodb+srv://jmayhugh:ho5ZYo2jGq7fxh4Z@cluster0.siiprmi.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() =>
    app.listen(4000, () => console.log("Server running on port 4000"))
  )
  .catch((error) => console.log(error.message));
