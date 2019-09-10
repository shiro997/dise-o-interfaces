var clean = function(){
	document.getElementById("code").value="";
	document.getElementById("pass").value="";
}

var redirect = function(){
	var inputCode = parseInt(document.getElementById("code").value);
	var inputPass = document.getElementById("pass").value;
	var baseUser = {
		codigo: 506151060,
		password: "h3lctcep0"
	};
	if(inputCode == baseUser.codigo && inputPass == baseUser.password)
	{
		window.location = "../MateoBlanco/pages/User.html";
	}else{
		alert("datos erróneos");
	}
}