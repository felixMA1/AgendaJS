var url = "https://alumnoscurso.azure-mobile.net/Tables/Alumno";


function guardarDatos() {
    var obj = {
        nombre : document.getElementById("nombre").value,
        apellidos : document.getElementById("apellidos").value,
        edad : document.getElementById("edad").value,
        nota : document.getElementById("nota").value
    };

    var ajax = new XMLHttpRequest();
    ajax.open("post", url);
    ajax.setRequestHeader("Content-Type", "application/json");

    ajax.onreadystatechange = function () {

        if (ajax.readyState == 4) {
            if (ajax.status >= 200 && ajax.status < 300) {
                obtenerDatos();
            }
            else {
                alert("Error");
            }
        }
    };

    var data = JSON.stringify(obj);
    ajax.send(data);

}





function obtenerDatos() {

    var ajax = new XMLHttpRequest();

    //Inicia la comunicacion con el servidor
    ajax.open("get", url);

    //Cuando cambie el estado, hara lo siguiente
    ajax.onreadystatechange = function () {

        //Si la operacion se ha completado
        if (ajax.readyState == 4) {

            //Si es estado del servidor es mayor de 200 y menor de 300 (exito)
            if (ajax.status >= 200 && ajax.status < 300) {
                
                //Transforma el texto en un JSON
                var data = JSON.parse(ajax.responseText);

                var salida = "<table>"
                for (var i = 0; i < data.length; i++) {
                    salida += "<tr>";
                    salida += "<td>" + data[i].nombre + "</td>";
                    salida += "<td>" + data[i].edad + "</td>";
                    salida += "</tr>";
                }
                salida += "</table>";
                
                document.getElementById("alumnos").innerHTML = salida;
            }
            else {
                alert("Error en la peticion");
                console.log(ajax.error);
            }
        }

    };


    ajax.send(null);
}

obtenerDatos();
document.getElementById("enviar").onclick = guardarDatos;