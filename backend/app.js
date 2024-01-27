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
app.get('/', (req,res) => {
    res.send('Hello World!');
});

app.get("/users", (req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((error) => res.status(400).json("Error: " + error));
    }
);
//get user by name
app.get("/users/:id", (req, res) => {
    User.findById(req.params.id)
        .then((user) => res.json(user))
        .catch((error) => res.status(400).json("Error: " + error));
    }
);
app.put("/users/:id", (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            user.name = req.body.name;
            user.password = req.body.password;
            user.friends = req.body.friends;
            user
                .save()
                .then(() => res.json("User updated!"))
                .catch((error) => res.status(400).json("Error: " + error));
        })
        .catch((error) => res.status(400).json("Error: " + error));
    }
);
app.post("/users", (req, res) => {
    const name = req.body.name;
    const password = req.body.password;
    const friends = req.body.friends;
    const newUser = new User({ name, password, friends });
    newUser
        .save()
        .then(() => res.json("User added!"))
        .catch((error) => res.status(400).json("Error: " + error));
    }
);

mongoose
  .connect(
    "mongodb+srv://jmayhugh:ho5ZYo2jGq7fxh4Z@cluster0.siiprmi.mongodb.net/?retryWrites=true&w=majority"
  )   
  .then(() =>
    app.listen(4000, () => console.log("Server running on port 4000"))
  )
  .catch((error) => console.log(error.message));
