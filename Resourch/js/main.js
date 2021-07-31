/*var user = {
    name: "sm ali",
    lover: "noor",
    age: 23,
    canSaid: false,
    hobby: "chess",
    spells: ["abrak", "shazam" , "boo"],
    shout: function(){
        console.log("Ahhhhhh!");
    }
};

var list = ["apple" , "banana" , "orange" , "mango"];

var list2 = [
  {
      username: "Andy",
      password: "Secret"
  },
    
  {
    username: "jess",
    password: "123"  
  }
];*/


/*Facebook_*/


var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning"
    },
    
    {
        username: "Sally",
        timeline: "Javascript is sooo coool"
    }
];

// ====================//
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(user, pass){
    for(var i=0; i<database.length; i++){
        if(database[i].username === user &&
          database[i].password === pass){
            return true;
        }
    }
    return false;
}

function signIn(user, pass){
    if(isUserValid(user, pass)){
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password")
    }
};

signIn(userNamePrompt, passwordPrompt);












































