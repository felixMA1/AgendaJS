/*
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                
                                                                                                    OBJETOS




*/


var alumno1 = new Object();

alumno1.nombre = "Felix";
alumno1.apellidos = "Martinez";
alumno1.edad = 22;
alumno1.nota = 8;

var alumno2 = {
    nombre: "Pedro",
    apellidos: "Jimenez",
    edad: 26,
    nota:7
}


//Funcion constructora
//La forma de hacer una sobrecarga en JS es agregar a cada variable ||
function Alumno(nombre, apellidos, edad, nota) {
    this.nombre = nombre || "";
    this.apellidos = apellidos || "";
    this.edad = edad || 0;
    this.nota = nota || 0;
    
    this.getNotaTexto = function () {
        if (this.nota < 5)
            return "suspenso";
        else
            return "Aprobado";
        
    }
}

var obj = new Alumno("pp", "aa", 12, 8);
var obj2 = new Alumno();
var obj3 = new Alumno("pp", "aa", 8);

var o = obj.apellidos;
var o2 = obj2.edad;
var o3 = obj.getNotaTexto();

//Forma de agregar propiedades al objeto dinamicamente
obj3.curso = 2015;

alert(o);
alert(o2);
alert("Calificacion: " + o3);




/*
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                
                                                                                                    PROTOTYPE




*/





//prototype permite modificar una clase en la cual no tienes permiso para editar.
Alumno.prototype.saludar = function () {
    alert("Hola " + this.nombre + ",¡¡¡Bienvenido!!!");
}

obj3.saludar();

alert(obj3.apellidos.toUpperCase());

//Se ha modificado el comportamiento de la funcion toUpperCase de la clase String.
//Siempre q se cargue este JS y se use esa funcion en vez de convertir a mayusculas retornara "Quetal".
//Este es un ejemplo para usar prototype ya que no se tiene permiso para editar la clase String.
String.prototype.toUpperCase = function () {
    return "Que tal";
}

alert(obj3.apellidos.toUpperCase());


/*
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                
                                                                                                    HERENCIA




*/


function Automovil(nombre, apellidos, edad, peso) {
    this.nombre = nombre || "";
    this.apellidos = apellidos || "";
    this.edad = edad || 0;
    this.peso = peso || 0;
}


Coche = function (nombre, apellidos, edad, peso) {
    this.nombre = nombre || "";
    this.apellidos = apellidos || "";
    this.edad = edad || 0;
    this.peso = peso || 0;
    this.getPesoTexto = function () {
        if (this.peso < 5)
            return "suspenso";
        else
            return "Aprobado";

    }
}

//Aqui accedo a la clase Automovil
Coche.prototype = new Automovil;
//Aqui acceso al constructor de Automovil
Coche.prototype.constructor = Coche;

var coche2 = new Coche(1000);
coche2.apellidos = "Audi";


alert(coche2.peso);
alert(coche2.apellidos);
console.log(coche2 instanceof Automovil);