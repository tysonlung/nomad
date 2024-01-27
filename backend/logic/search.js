import axios from "axios";
export function exploreSearch(user) {
  // postlis
  let postList = [];

  // loop though all the users friends and add all their postIDS
  let friends = axios.get("http://localhost:4000/users/" + user).then(
    (res) => {
      console.log(res.data.friends);
      return res.data.friends;
    },
    (err) => {
      console.log("could not get intial users friends with error: " + err);
    }
  );

  //get the main users direct friends posts
  postList = getPostForFriends(friends).then((res) => {
    console.log(res);
  });
  return postList;
}
function getPostForFriends(user) {
  let postList = [];
  //get list of users friends
  let friends = axios.get("http://localhost:4000/users/" + user).then(
    (res) => {
      console.log(res.data.friends);
      return res.data.friends;
    },
    (err) => {
      console.log("could not get intial users friends with error: " + err);
    }
  );
  // loop through the friends and get their posts
  for (let i = 0; i < friends.length; i++) {
    let friend = friends[i];
    let friendslist = [];
    friendslist = axios.get("http://localhost:4000/users/" + friend).then(
      (res) => {
        console.log(res.data.friends);
        return res.data.friends;
      },
      (err) => {
        console.log("could not get intial users friends with error: " + err);
      }
    );
    postList = postList.concat(getPostForFriends(templist));
  }
}
