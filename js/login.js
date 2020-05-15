

document.addEventListener('DOMContentLoaded', function(){
    //EVENTOS


//Input email
email.addEventListener('focusin', animaEmailIn);
email.addEventListener('focusout', animaEmailOut);
// input password
password.addEventListener('focusout', animaPassOut);
password.addEventListener('focusin', animaPassIn);

//se encarga de enviar los datos y nos envia al index
form.addEventListener('submit', enviaDatos);

});


//Evento que realiza el form

    function enviaDatos (e)   {
    e.preventDefault();

    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


    let regexp_password =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    
    var error = document.getElementById("error");
    var email = document.getElementById("email");
    var password = document.getElementById("password");


    email = email.value;
    password = password.value;
    console.log ("El pass es" + password);

     if( email == ""){
        console.log("El campo email esta vacio");
        error.innerHTML = " El campo Email esta vacio ";
        return false;
    }

    else if (!emailRegex.test(email)){
        error.innerHTML = " Te ha hecho falta un @ o un punto";
        console.log("Falta simbolo @ o .");

        return false;
    }

    else if( password == ""){
        error.innerHTML = " El campo Password esta vacio ";
        console.log("El campo Password esta vacio");
        return false;
    }

    else if ( !regexp_password.test(password)){

        error.innerHTML = " Debes ingresar al menos 8 caracteres , al menos una mayuscula, un digito, ningun espacio en blanco y un caracter especial ";
        console.log( ` Debes ingresar al menos 8 caracteres , 
        al menos una letra minuscula,
        al menos un digito, no debes ingresar
        espacion en blanco y un caracter especial
        ` );
    }

  



    if(password != "" && password.length > 7 && emailRegex.test(email) && email !=""){
        error.innerHTML = "send";
        window.location.href = "index.html";
    }else{
        error.innerHTML = "Nombre de usuario o contraeña erroneos";
    }




}    


//Contiene el email
var email = document.getElementById("email");
//label email
var labelEmail = document.getElementById("labEmail");
//Contiene el password
var password = document.getElementById("password");
//label password
var labelPass = document.getElementById("labPass");


//variable que contiene al formulario
var form = document.querySelector(".container form");

function animaEmailIn(){
    labelEmail.style.top = '-18px';
    labelEmail.style.fontSize = '14px';}

function animaEmailOut(){
     var email = document.getElementById("email").value;
     if(email == "" ){
         labelEmail.style.top = '0';labelEmail.style.fontSize = '16px';
        }}

function animaPassIn(){
    labelPass.style.top = '-18px';
    labelPass.style.fontSize = '14px';
}

function animaPassOut(){
     var password = document.getElementById("password").value;
     if(password == "" )
     {
         labelPass.style.top = '0';
         labelPass.style.fontSize = '16px';
    }
}



