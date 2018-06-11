// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  /*// Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}*/

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}



/*


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
	document.getElementById("user_div").style.display="block";
	document.getElementById("login_div").style.display="none";
	
	var user = firebase.auth().currentUser;
	if(user!=null){
			
			var email_id=user.email;
			document.getElementById("user_para").innerHTML="Welcome useer "+ email_id;
	}
	
  } else {
    // No user is signed in.
	document.getElementById("user_div").style.display="none";
	document.getElementById("login_div").style.display="block";
	
  }
});


function login(){
	var userEmail= document.getElementById("email_field").value;
	var userPassword= document.getElementById("password_field").value;
	
	firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  
  window.alert(errorMessage); 
  // ...
});
}
function logout(){
	firebase.auth().signOut();
}