$(function(){
	$('#ingresar').click(function(){

		var baseUser = {
			cod:506151060,
			pass:'h3lctcep0'
		};

		var input1 = parseInt(document.getElementById('code').value);
		var input2 = document.getElementById('pass').value;
		
		if(baseUser.cod == input1 && baseUser.pass == input2){
			alert('Bienvenido');
			location.href = '../../pages/User.html';
		}else{
			alert('datos erróneos');
			location.reload();
		}

	});
	$('#limpiar').click(function(){
		document.getElementById('code').value = '';
		document.getElementById('pass').value = '';
	});
});