//Funcion en variable
var saludo = function (texto) {

    alert("Hola" + texto);

}

function saludando(texto) {

    alert("Hola" + texto);

}

//Funcion anonima
document.getElementById("btn1").onclick = function (e) {
    alert("Hola" + e.target.outerText);
}

document.getElementById("btn2").onclick = saludando;

/*
    Diferencias entre poner parentesis al asignar una funcion a un boton y no ponerlo.
    Ej:
        document.getElementById("btn2").onclick = saludo;

            -Aqui se asignaria al boton el codigo de la funcion. Y al pulsar el boton se ejecutaria el codigo.

        document.getElementById("btn2").onclick = saludo();

            -Aqui se ejecutaria al cargar la pagina el codigo. Y al pulsar el boton no se ejecutaria el codigo
*/