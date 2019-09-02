var user = {
    codigo:"",
    password:""
}

var user2 = {
    codigo: 506151060,
    password: "h3lctcep0"
}

var routes = new URL("../pages/User.html");

function acceso(){
    user.codigo = parseInt(document.getElementById("code").value);
    user.password = document.getElementById("pass").value;
    if(user.codigo==user2.codigo){
        if(user.password == user2.password){
            location.href = routes;
            debugger;
            console.log(window.location.href.toString());
        }
    }
}