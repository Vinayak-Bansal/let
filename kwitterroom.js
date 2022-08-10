const firebaseConfig = {
    apiKey: "AIzaSyCuEcR5GkJJxcgNJ_q_LvIICeB2dspBOPc",
    authDomain: "lets-chatt-web-app.firebaseapp.com",
    databaseURL: "https://lets-chatt-web-app-default-rtdb.firebaseio.com",
    projectId: "lets-chatt-web-app",
    storageBucket: "lets-chatt-web-app.appspot.com",
    messagingSenderId: "236012059073",
    appId: "1:236012059073:web:ea4c5fa9901ea539e05740"
  };
  function addRoom()
{
 room_name=document.getElementById("room_name").value
 firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
 })
 localStorage.setItem("room_name" , room_name)
 window.location="kwiiter_page.html"

}