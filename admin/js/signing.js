//Variables
var ref = new Firebase("https://fortax.firebaseio.com");

var loginButton = $("#loginButton");
	var errorText = $("#errorText");

$("#loginButton").on("click", function(e) {
	e.preventDefault();
	var email =  $("#inputEmail").val();
	var password = $("#inputPassword").val();

	ref.authWithPassword({ email: email, password: password }, callBack);
});

//On click listenter for login button
// loginButton.click(function(){ 
	
// 	ref.authWithPassword({
//   email    : email,
//   password : password
// }, function(error, authData) {
// 	  if (error) {
// 	    console.log("Login Failed!", error);
// 	    console.log("Email", this.email);
// 	    console.log("Password", this.password);
// 	    // errorText.text(error);
// 	    // alert(error);
// 	    errorText.css("visibility", "visible").hide().fadeIn("slow");
// 	  } else {
// 	    //console.log("Authenticated successfully with payload:", authData);
// 	    alert("YAY");
// 	  }
// 	});
// 	return false; //Extra insurance
// });

function test() {
	return true;
}


function callBack (error, authData) {
  if (error) {
    console.log("Login Failed!", error);
    // errorText.text(error);
    // alert(error);
    errorText.css("visibility", "visible").hide().fadeIn("slow");
  } else {
    //console.log("Authenticated successfully with payload:", authData);
    alert("YAY");
  }
};



