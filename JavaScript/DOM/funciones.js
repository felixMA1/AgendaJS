function crearTabla() {
    var tabla = document.createElement("table");

    for (var i = 0; i < 5; i++) {

        var fila = document.createElement("tr");
        var c1 = document.createElement("td");
        var txt1 = document.createTextNode("Fila " + i + " col 1");
        c1.appendChild(txt1);

        var c2 = document.createElement("td");
        var txt2 = document.createTextNode("Fila " + i + " col 2");
        c2.appendChild(txt2);

        var c3 = document.createElement("td");
        var txt3 = document.createTextNode("Fila " + i + " col 3");
        c2.appendChild(txt3);

        fila.appendChild(c1);
        fila.appendChild(c2);
        fila.appendChild(c3);

        tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);
    tabla.setAttribute("draggable", "true");
    tabla.setAttribute("ondragstart", "drag(event)");
}
document.getElementById("link").onclick = crearTabla;


function cambiarImagen(e) {
    var img = document.getElementById("drag1");
    e.target.appendChild(img);
}

var capas = document.querySelectorAll("div");
for (var i = 0; i < capas.length; i++) {
    capas[i].onclick = cambiarImagen;
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}