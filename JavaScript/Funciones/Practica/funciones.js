
var validar = function (e) {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");

    if (!isNaN(num1.value) && !isNaN(num2.value)) {

        calculo(e);

    }

}

var calculo = function (e) {
    //Asigno a las variables num1 y num2 el value de los input
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    //Asigno a la variable operando el contenido del boton (+ | - | * | / )
    var operando = e.target.innerHTML;
    
    //Concateno en operando el contenido de num1, operando y num2
    var operacion = num1 + operando + num2;

    var resultado = eval(operacion);

    document.getElementById("operando").innerHTML = operando;
    document.getElementById("igual").innerHTML = "=";
    document.getElementById("resultado").value = resultado;

}
/*
    Funcion que limpia el contenido de los input y cajas.
*/
var clear = function () {

    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operando").innerHTML = "";
    document.getElementById("igual").innerHTML = "";
    document.getElementById("resultado").value = "";
}


var invocar = (function () {

    document.getElementById("suma").onclick = validar;
    document.getElementById("resta").onclick = validar;
    document.getElementById("multiplicacion").onclick = validar;
    document.getElementById("division").onclick = validar;
    document.getElementById("limpiar").onclick = clear;

})();
