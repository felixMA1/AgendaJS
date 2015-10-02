var url = "https://alumnoscurso.azure-mobile.net/Tables/Curso";
var modificando = undefined;

function guardarDatos() {
    var obj = {
        nombre: document.getElementById("nombre").value,
        duracion: parseInt(document.getElementById("duracion").value)
    };
 
        var ajax = new XMLHttpRequest();
        ajax.open("post", url);
        ajax.setRequestHeader("Content-Type", "application/json");

        ajax.onreadystatechange = function () {

            if (ajax.readyState == 4) {
                if (ajax.status >= 200 && ajax.status < 300) {
                }
                else {
                    alert("Error");
                }
            }
        };

        var data = JSON.stringify(obj);
        ajax.send(data);
        obtenerDatos();
    

}

function cargarModificacion(id) {
    var ajax = new XMLHttpRequest();
    ajax.open("get", url + "/" + id);
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status >= 200 && ajax.status < 300) {
                var data = JSON.parse(ajax.responseText);
                document.getElementById("nombre").value = data.nombre;
                document.getElementById("duracion").value =
                    data.duracion;
                modificando = data.id;
            }
            else {
                alert("Error!!!!");
            }
        }
    }
    ajax.send(null);


}
function ejecutarModificacion() {
    var ajax = new XMLHttpRequest();
    ajax.open("PATCH", url + "/" + modificando);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            if (ajax.status >= 200 && ajax.status < 300) {
                obtenerDatos();

            }
            else {
                alert("Error!!!!");
            }
        }
    }
    var data = {
        nombre: document.getElementById("nombre").value,
        duracion: parseInt(document.getElementById("duracion").value)
    };
    data.id = modificando;
    ajax.send(JSON.stringify(data));
}



function obtenerDatos() {

    var ajax = new XMLHttpRequest();

    //Inicia la comunicacion con el servidor
    ajax.open("get", "https://alumnoscurso.azure-mobile.net/Tables/Curso");

    //Cuando cambie el estado, hara lo siguiente
    ajax.onreadystatechange = function () {

        //Si la operacion se ha completado
        if (ajax.readyState == 4) {

            //Si es estado del servidor es mayor de 200 y menor de 300 (exito)
            if (ajax.status >= 200 && ajax.status < 300) {

                //Transforma el texto en un JSON
                var data = JSON.parse(ajax.responseText);

                var salida = document.getElementsByTagName("tbody");
                salida[0].innerHTML = "";
                for (var i = 0; i < data.length; i++) {
                    salida[0].innerHTML+="<tr>"; 
                    salida[0].innerHTML += "<td>" + data[i].nombre +
                        "</td><td>" + data[i].duracion +
                        "</td><td><button type'button' onclick='borrar(\"" +data[i].id + "\")'>Borrar</button></td>"+
                        "<td><button type'button' onclick='cargarModificacion(\""+data[i].id+"\")'>Modificar</button></td>";
                    salida[0].innerHTML+="</tr>";
                }
            }
            else {
                alert("Error en la peticion");
                console.log(ajax.error);
            }
        }

    };


    ajax.send(null);
}

function borrar(id) {
    var ajax = new XMLHttpRequest();

    //$filter=nombre eq 'asdsa'&duracion eq 1232

    //ajax.open("get", "https://alumnoscurso.azure-mobile.net/Tables/Curso/?$filter=nombre eq '" + document.getElementById("nombre").value + "'&duracion eq " + document.getElementById("duracion").value);


    //ajax.onreadystatechange = function () {

    //    //Si la operacion se ha completado
    //    if (ajax.readyState == 4) {

    //        //Si es estado del servidor es mayor de 200 y menor de 300 (exito)
    //        if (ajax.status >= 200 && ajax.status < 300) {

    //            //Transforma el texto en un JSON
    //            var data = JSON.parse(ajax.responseText);
    //            var id = data[0].id;

                ajax.open("delete", "https://alumnoscurso.azure-mobile.net/Tables/Curso/" + id);

                ajax.onreadystatechange = function () {

                    //Si la operacion se ha completado
                    if (ajax.readyState == 4) {

                        //Si es estado del servidor es mayor de 200 y menor de 300 (exito)
                        if (ajax.status >= 200 && ajax.status < 300) {
                            obtenerDatos();

                        }
                        else {
                            alert("Error en el borrado");
                            console.log(ajax.error);
                        }
                    }

                };
           
    ajax.send(null);

}
document.getElementById("enviar").onclick = function () {
    if (modificando != undefined)
        ejecutarModificacion();
    else
        obtenerDatos();
};;
document.getElementById("refrescar").onclick = obtenerDatos;