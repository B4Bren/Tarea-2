var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var res = document.getElementById("result");


var targetDiv = document.getElementById("operacion");
var btn = document.getElementById("bCalculadora");
var cta = res.textContent;

btn.onclick = function toggleSelection(){
    if (targetDiv.style.display != "none"){
        targetDiv.style.display = "none";
        
    }else{
        targetDiv.style.display = "block";
        //document.getElementById("bCalculadora").innerHTML = ocultar calculadora;
    }
};


document.getElementById("add").addEventListener("click", function sumar () {
    res.value = parseInt(n1.value) + parseInt(n2.value);
    validarVacios(res);
    //document.getElementById("resultado").innerHTML = res.value;
});

document.getElementById("sub").addEventListener("click", function restar () {
    res.value = parseInt(n1.value) - parseInt(n2.value);
    validarVacios(res);
   // document.getElementById("resultado").innerHTML = res.value;
});

document.getElementById("mul").addEventListener("click", function multiplicar() {
    res.value = parseInt(n1.value) * parseInt(n2.value);
    validarVacios(res);
    //document.getElementById("resultado").innerHTML = res.value;
    
});

function validarVacios(resultado) {
        if(!isNaN(resultado)) {
            imprimirMensaje(resultado);
        } else {
             document.getElementById("resultado").innerHTML = "Debe ingresar valores numericos";
        }
 };

 function imprimirMensaje(resultado){
    document.getElementById("resultado").innerHTML = res.value;
 };


    



    
