document.addEventListener('DOMContentLoaded', function(){
                //EVENTOS
            //este evento animara el input al agregar una entidad
            entidad.addEventListener('focusout', animaOut);
            entidad.addEventListener('focusin', animaIn);
            //var item = document.getElementById("item");
            enviarOperacion.addEventListener('click', realizarOperacion);
            closeInput.addEventListener('click', closeInputPopup);
            buttonMenu.addEventListener('click', addDebito);
            //item.addEventListener('click',devuelveLabel);
});
//este variable permite llamar al popup
var buttonMenu = document.getElementById("button");
//aqui se llama al id que contiene el popup
var inputMainBill = document.getElementById("inputMainBill");
//esta variable llama al elemento que va a cerrar el popup
var closeInput = document.querySelector(".item .close");
//Estas variables son para hacer las respectivas operaciones de agregar o restar el saldo
var ingreso = document.getElementById("ingreso");
//mostrara el total
var total = document.getElementById("saldo");
//Esta variable capturara el nombre de la entidad
var entidad = document.getElementById("entidad");
//variable que contiene el label para animar el input
var labelEnt = document.getElementById("labelEnt");
var enviarOperacion = document.getElementById("enviarOperacion");

function animaIn(){labelEnt.style.top = '-25px';labelEnt.style.fontSize = '14px';}

function animaOut(){ var entidad = document.getElementById("entidad").value;if(entidad == "" ){labelEnt.style.top = '0';labelEnt.style.fontSize = '16px';}}

function creaElemento(){    
    contEnt = document.getElementById("contEnt"), contCant = document.getElementById("contCant");
    var ent = document.getElementById("entidad");ent = ent.value;
    var valor = document.getElementById("valor");valor = valor.value;
    var div = document.createElement("div"); content = document.createTextNode(ent);div.appendChild(content);div.classList = "entidad";
    var div2 = document.createElement("div");cont2 = document.createTextNode(valor);div2.appendChild(cont2);div2.classList = "entidad";
    var divCont = document.createElement("div");divCont.classList ="flex";divCont.appendChild(div);divCont.appendChild(div2);
    var contEnt = document.getElementById("contEnt");contEnt.appendChild(divCont);
}

var suma = 0, datos = [], saldo = 0;

function realizarOperacion(){
    var ent = document.getElementById("entidad").value,transaccion =  document.getElementById("transaccion").value, valor = document.getElementById("valor").value;

    valor.trim();
    ent.trim();
    transaccion.trim();

    console.log(transaccion);
    console.log(ent);
    console.log(valor);

    valor = [  , parseInt(valor) , parseInt(transaccion)] ;datos.push(valor);

    console.log(transaccion);
      
            
    if(transaccion != "" && valor != "" && valor!= null && ent != ""  ){alert("haz llenado todos los campos");


    for(var i = 0; i < datos.length ; i++){            
        console.log("Bien los has llenado todos los campos");
        determina = datos[i][2]; if(determina == 1){ saldo+= datos[i][1];console.log("Es una suma");}else if(determina == 0){saldo-= datos[i][1];console.log("He restado");}}
        creaElemento();
        total.innerHTML = `${saldo} <span class>USD</span>` ;
        console.log("Soy el saldo total: " + saldo);
        saldo = 0;
        suma = 0;

}
    
    else{
        alert("Debes llenar todos los campos");
        console.log(transaccion);
        console.log(ent);
        console.log(valor);
        }
            
    }

function closeInputPopup(){inputMainBill.style.display = "none";} 
function addDebito (){inputMainBill.style.display="block";}


/*function determinaTransaccion (){
  var datos = []
  for(var i = 0; i < datos.length; i++){determina = datos[i][2]; console.log(datos[i][1]);if(determina == 1){saldo+= datos[i][1];console.log("Es una suma");}else if(determina == 0){saldo-= datos[i][1];console.log("He restado");}}
  console.log("Soy el saldo" + saldo);
}
determinaTransaccion();
*/





