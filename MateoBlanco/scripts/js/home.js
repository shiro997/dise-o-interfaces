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
	var route = '/MateoBlanco/pages/User.html';
	if(inputCode == baseUser.codigo && inputPass == baseUser.password)
	{
		document.location.href = route;
	}else{
		alert("datos erróneos");
		document.location.href = '../MateoBlanco/index.html'
  }
}