let db;
let myPost;
document.addEventListener("DOMContentLoaded", (event) => {
  const app = firebase.app();
  db = firebase.firestore();
  myPost = db.collection("posts").doc("firstpost");

  viewData();
});

function login() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      document.write(`Hello ${user.displayName}`);
    });
}

function updatePost(e) {
  const db = firebase.firestore();
  //   const myPost = db.collection("posts").doc("firstpost");
  myPost.update({ title: e.target.value });
  viewData();
}
function viewData() {
  myPost.get().then((doc) => {
    const data = doc.data();
    console.log(data);
  });
}

function viewAllCollection() {
  db.listCollections().then((result) => {
    console.log(result);
  });
}

function createData() {
  db.collection("new").doc("test").set({ title: "name data" });
}
