const mongoose = require("mongoose");
const User = require("./models/user");
const Post = require("./models/post");
const express = require("express");
const { Storage } = require("@google-cloud/storage");
const bucketName = "slutty-whores";
projectid = "cum-sluts";
path = require("path");
keyFilePath = "./cum-sluts-2b7dc8063bc5.json";

//function for adding images
const authenticateImplicitWithAdc = async () => {
  const storage = new Storage({
    keyFilename: keyFilePath,
  });
  const bucket = storage.bucket(bucketName);
  let fileCount = 0;
  const options = {
    prefix: "tempUser/india052024/",
  };
  try {
    const [files] = await bucket.getFiles(options);
    console.log("these are all the files" + files);
    fileCount = files.length;
    console.log("there are " + fileCount + " files ");
  } catch (error) {
    console.error("Error counting files", error);
    throw error;
  }
};
const uploadImage = async (userName, country, mm, yyyy, link) => {
  const storage = new Storage();
  console.log("uploading image");
  const bucket = storage.bucket(bucketName);
  let fileCount = 0;
  const options = {
    prefix: userName + "/" + country + mm + yyyy + "/",
  };
  try {
    const [files] = await bucket.getFiles(options);
    fileCount = files.length;
    console.log("there are " + fileCount + " files ");
  } catch (error) {
    console.error("Error counting files", error);
    throw error;
  }
  const fileName = userName + "/" + country + mm + yyyy + "/" + fileCount;
  //given the link to an image stored locally upload it to the cloud under the name fileCount
  const file = bucket.file(fileName);
  try {
    await file.save(link);
  } catch (error) {
    console.error("Error uploading file", error);
    throw error;
  }
};

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
  uploadImage("tempUser", "india", "05", "2024", "");
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

mongoose
  .connect(
    "mongodb+srv://jmayhugh:ho5ZYo2jGq7fxh4Z@cluster0.siiprmi.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() =>
    app.listen(4000, () => console.log("Server running on port 4000"))
  )
  .catch((error) => console.log(error.message));
