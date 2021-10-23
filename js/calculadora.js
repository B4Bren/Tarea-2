var n1 = document.getElementById("num1");
var n2 = document.getElementById("num2");
var res = document.getElementById("result");
var tot = res.textContent;

var targetDiv = document.getElementById("operacion");
var btn = document.getElementById("bCalculadora");
var cta = res.textContent;

btn.onclick = function toggleSelection(){
    if (targetDiv.style.display != "none"){
        targetDiv.style.display = "none";
        
    }else{
        targetDiv.style.display = "block";
        document.getElementById("bCalculadora").innerHTML;
    }
};


document.getElementById("add").addEventListener("click", function sumar () {
    res.value = parseInt(n1.value) + parseInt(n2.value);
    //document.getElementById("resultado").innerHTML = res.value;
});

document.getElementById("sub").addEventListener("click", function restar () {
    res.value = parseInt(n1.value) - parseInt(n2.value);
    //document.getElementById("resultado").innerHTML = res.value;
});

document.getElementById("mul").addEventListener("click", function multiplicar() {
    res.value = parseInt(n1.value) * parseInt(n2.value);
    //document.getElementById("resultado").innerHTML = res.value;
});


function validarVacios() {
        if(!isNaN(n1 || n2)) {
             function imprimirMensaje(res){
                document.getElementById("resultado").innerHTML = res.value;
             };
        } else {
            document.getElementById('resultado').textContent = "Debe ingresar valores numericos";
            }
        };
    
/*var total = document.getElementById("resultado");
total.textContent = tot;

function imprimirmensaje() {
    document.getElementById("resultado").innerHTML = res.value;
    
}*/