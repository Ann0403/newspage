

function valid(e){
	
	var email  = document.getElementById("email").value;
	var password = document.getElementById("pass").value;
	e.preventDefault();
	 if (email == "") 
	 {
	 	document.getElementById("paremail").style.display = "block";
	 }

	 if (password =="") 
	 {
	 	document.getElementById("parpassword").style.display = "block";
	 }

	var useremail = "admin@email.com";
	var userpass = "87654321";

	if (email == useremail && password == userpass) 
	{ 
		location.href = 'pageadmin.html';
	}
	var adminemail = "user@email.com";
	var adminpass = "12345678";

	if (email == adminemail && password == adminpass)
	{
		location.href = 'pageuser.html';
	}
}
document.querySelector('.form__block').addEventListener('submit', (e) => valid(e));




