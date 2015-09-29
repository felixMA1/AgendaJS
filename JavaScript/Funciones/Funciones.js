//Funcion en variable
var saludo = function (texto) {

    alert("Hola" + texto);

}

function saludando(texto) {

    alert("Hola" + texto);

}

document.getElementById("btn2").onclick = saludando;



//Funcion autoinvocada
(function () {

    //Funcion anonima
    document.getElementById("btn1").onclick = function (e) {
        alert("Hola" + e.target.outerText);
    }

})();


/*
    Diferencias entre poner parentesis al asignar una funcion a un boton y no ponerlo.
    Ej:
        document.getElementById("btn2").onclick = saludo;

            -Aqui se asignaria al boton el codigo de la funcion. Y al pulsar el boton SI se ejecutaria el codigo.

        document.getElementById("btn2").onclick = saludo();

            -Aqui se ejecutaria el codigo al cargar la pagina. Y al pulsar el boton NO se ejecutaria el codigo


    En una funcion los parametros pueden ser: e y evt.
        - 'e' es el delegado del evento.
        - 'target' es el objeto que contiene el evento con toda su informacion, en este caso el boton.


    Autoinvocacion de funciones. Se introduce la funcion dentro de parentesis y finaliza con parentesis.
    Se utiliza para crear objetos.
*/