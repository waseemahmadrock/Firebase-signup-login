var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var nameinput= document.getElementById('name');
var database = firebase.database();
var auth = firebase.auth();

function signup(){
    var myemail = emailInput.value;
    var mypassword = passwordInput.value;
    var myname = nameinput.value;

    auth.createUserWithEmailAndPassword(myemail , mypassword)
    .then(function(user){
        return user.updateProfile({displayName : myname})
        .then(function(){
            location = 'login.html';
    });
    })
    .catch(function(error){
        console.log(error.message);
    })
}

function signin(){
    var myemail = emailInput.value;
    var mypassword = passwordInput.value;
   
    auth.signInWithEmailAndPassword(myemail , mypassword)
    .then(function(user){
       console.log(user);
    })
    .catch(function(error){
        console.log(error.message);
    })
}