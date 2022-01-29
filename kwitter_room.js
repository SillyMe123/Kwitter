// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCTVLWp0G-cDDniFq7_agNh2SAHMZWD7Go",
  authDomain: "kwitter-27972.firebaseapp.com",
  databaseURL: "https://kwitter-27972-default-rtdb.firebaseio.com",
  projectId: "kwitter-27972",
  storageBucket: "kwitter-27972.appspot.com",
  messagingSenderId: "347090120139",
  appId: "1:347090120139:web:c2001c5983771cf1a9da4e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name;

function addRoom() {
  room_name = document.getElementById("room_name").nodeValue;
  firebase.database().ref("/").child(user_name).update({
    purpose: "addingRoomName"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitterpage.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("room_name=" + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerhtml+=row;
    });
  });
}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitterpage.html";
}
function logout()
{localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";}



