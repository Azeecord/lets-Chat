
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {

      apiKey: "AIzaSyCRAraGsM1-jMBEjfJHU77SPGyl00Ta1aA",
    
      authDomain: "kwitter-9290f.firebaseapp.com",
    
      databaseURL: "https://kwitter-9290f-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-9290f",
    
      storageBucket: "kwitter-9290f.appspot.com",
    
      messagingSenderId: "511942303955",
    
      appId: "1:511942303955:web:1be3b486fca7e08822f426"
    
    };
    
    
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);
    
  
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name +"!";
    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
     getData();
     function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html"
     }
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location="qwitter.html";
}

