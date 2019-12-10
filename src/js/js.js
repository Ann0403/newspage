document.querySelector('.form__block').addEventListener('submit', (e) => valid(e));

function valid(e){
	
	var email  = document.getElementById("email").value;
	var password = document.getElementById("pass").value;
	e.preventDefault();
	 if (email == "") 
	 {
	 	document.getElementById("paremail").style.display = "block";
	 	/*var pemail = document.createElement("p");
	 	var textemail = document.createTextNode("input your password");
	 	pemail.appendChild(textemail);
	 	var p = document.getElementById("paremail");
	 	p.appendChild(pemail);*/
	 }

	 if (password =="") 
	 {
	 	document.getElementById("parpassword").style.display = "block";
	 	/*var ppass = document.createElement("p");
	 	var var textpass = document.creatTextNode("your password invalid");
	 	ppass.appendChild("textpass");
	 	var pp = document.getElementById("parpassword");
	 	pp.appendChild(ppass);*/
	 }

	var useremail = "user@email.com";
	var userpass = "87654321";

	if (email == useremail && password == userpass) 
	{ 
		location.href = 'pageuser.html';
	}
	var adminemail = "admin@email.com";
	var adminpass = "12345678";

	if (email == adminemail && password == adminpass)
	{
		location.href = 'pageadmin.html';
	}
}

function openmmodal(){
	document.getElementById("modal").style.display = "block";
}

document.getElementById('modal__add').onclick = function () {
	document.getElementById("modal").hidden = true;

}
/*window.onload = function(){
	var addnews = [];
	document.getElementById('modal__add').onclick =function(){
		var inputnew =  document.getElementById('modal__content').value;
		var temp = {};
		temp.new = inputnew;
		temp.check = false; 
		var n = addnews.length;
		addnews[n] = temp;
		out();
	}
	function new(){
		var out = ' ';
		for (var key in addnews) {
			out+=addnews[key]+'<br>';
		}
		document.getElementById('news').innerHTML = out;
		}
	}
*/