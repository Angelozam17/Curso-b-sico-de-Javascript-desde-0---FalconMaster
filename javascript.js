/*//Variables//

var nombre = "Angelo";
alert(nombre);



var nombrePrompt;

nombrePrompt = prompt("Ingresa tu nombre", "Escribe tu nombre");

edad = prompt("Edad");

document.write(nombrePrompt + " tiene " + edad + " años");
*/





/*// Tipos de datos

    // Numérico - float(decimales)
        var edad = 19.21415;

    // String - Cadena de texto
        var nombre = "Carlos";
        var apellido = "Alberto";
        var texto = "\"Hola\" ";  //Escribir comillas    
        //document.write(texto + nombre + " " + apellido);

    // Array - arreglo
        var amigos = ["Carlos", "Alejandro", "Cesar"];
        //document.write(amigos[1]);

    // Object
        var objeto = {
            color: "Black",
            size: 12
        }
        
    // Boolean
        var boleano = true;
        var boleano2 = false;

    // Undefined
        var angelo; //no está definida

    // Null
        var numero2 = 10;
        var numero2 = null;

    // NaN
        var texto2 = "hola cómo estás?";
        document.write(texto2 * 12);*/
        
        



/*//ARREGLOS

    var amigos = ["Carlos", "Cesar", "Alex"];
    amigos[0] = "Arturo"; //Estoy modificando el elemento de posición 0

    alert(amigos[0]);*/






/*//MÉTODOS DE ARRAY

var amigos = ["Carlos", "Cesar", "Alex", "Alejandro"];

var amigos2 = ["Johan", "Calamardo", "Mora"];


alert("Tienes " + amigos.length + " amigos en amigos");
    //length cuenta cuántos elementos hay

amigos[amigos.length] = "Fernando";
amigos[amigos.length] = "Luis";
//or
amigos.push("Fernanda", "Luisa");
    //Push agrega elementos al final de un arrelo

amigos.pop();
    //Pop elimina el úlmito elemento de un array

var amigos3 = amigos.concat(amigos2);
    //concat encadena varios arrays

alert( amigos.join(" °°°°° ") );
    //Join separa los elementos con lo que coloquemos en los paréntesis


var ordenar = amigos.reverse();
    //sort ordena alfabéticamente los elementos de un array
    //reverse ordena los elementos al revés de como están escritor
document.write(ordenar);*/





/*//CONDICIONALES

var nombre = "Arturo",
    edad = 17,
    apellido = "Gonzalez"

    
    //> mayor que
    //< menor que
    //>= mayor o igual
    //<= menor o igual
    //== igual que
    //!= distinto de
    //=== exactmente igual (mismo valor y del mismo tipo)


if ( edad >= 18 && nombre == "Carlos" ){
        //&& y también...
        //|| or
        document.write( "True");
   } else if ( apellido ){
        //Se está preguntando de apellido tiene algún dato
       document.write("False");
   } */





/*//CICLO FOR

for ( var i = 0; i <= 10; i++){
    //instrucciones
}


var dias = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

for ( var i = 0; i <= dias.length -1; i++){
        //i++ or i=i+1
    document.write( dias[i] + "<br>");
}*/





/*//FUNCIONES

function saludo( nombre ){
    document.write("Hola " + nombre);
}

saludo("David");

var suma = function (numero1, numero2){
        //Esta función es anónima pero está asignada a una variable 
        //las variables dentro de las funciones son variables locales
    
    return numero1 - numero2;
}

alert(suma(320, 70));
alert(suma(31, 90));

function numeroMax(valor1, valor2){
    if ( valor1 > valor2  ){
        return valor1;   
    }
    return valor2;
}

numeroMax(567, 345);*/





/*//Ejercicio con Funciones y Formularios

    
var suma = function(){
    var numero1 = parseFloat(document.getElementById("numero1").value);
        //parseFloat Analiza una cadena de texto y devuelve un decimal
    var numero2 = parseFloat(document.getElementById("numero2").value);
        //parseInt Analiza una cadena de texto y devuelve un entero
    
    var resultado = numero1 + numero2;
    return resultado;
}*/




/*//Scope de Javascript (ámbito de las variables)


    //Global - Podemos acceder a ellas en cualquier parte del código
    //Local - Variable creadas dentro de una función, solo pueden ser accedidas dentro de la misma funcióno una anidada.




(function(){
    //Esto es una funcion autoinvocada. Todo lo que está afuera no puede acceder a lo que esté en este código.
    var variableGlobal = "Esta es Global"


    var miFuncion = function(){
        var variableLocal = "Esta es Global dentro de una función";
            //Cuando una variable dentro de una función no tiene la palabra reservada "var", se vuelve una variable Global.
        alert(variableLocal);
            //Las variables buscan hacia afuera, no hacia dentro.

        var funcionLocal = function(){
            var variableLocal = "Esto es variable local dentro de una funcionLocal"
        alert(variableLocal);
        
    }
    funcionLocal();
} 
}())*/





/*//Metodos y propiedades para Cadenas de Texto

var texto = "Hola, yo me llamo Angelo";
var texto2 = texto.indexOf("a") + 1;

var nuevoTexto = texto.length;
    //Outputs 5
    //length también sirve para contar cuántos carácteres tiene una cadena de texto (string).

var nuevoTexto2 = texto.substring(6);
    //Outputs yo me llamo Angelo
    //substring corta la cadena de textio desde cierto carácter.

var nuevoTexto3 = texto.substr(3, 8);
    //Outputs a, yo me
    //substr corda desde una posición a otra

var nuevoTexto4 = texto.indexOf("a", texto2);
    //Outputs 3
    //indexOf retorna la posición del caracter(es). El segundo parámetro es desde dónde quiero que comience a buscar.
    //lastIndexOf hace lo mismo pero desde atrás hacia delante.

var textoReemplazado = texto.replace("o", "@");
    //Outputs Este texto ha sido reemplazado, yo me llamo Angelo
    //Reemplaza una cadena de texto por otra. 1. El texto que se quiere reemplazar. 2. El texto por el que se reemplaza.

var mayusculas = texto.toUpperCase();
    //Outputs HOLA, YO ME LLAMO ANGELO

var minusculas = texto.toLowerCase();
    //Outputs hola, yo me llamo angelo*/




/*//Introducción al DOM (Document Object Model)
    //Estructura del HLMT. Poder acceder a los elementos del HTML.


var elementoP = document.getElementsByTagName("p");
    //innerHTML accede a todas las etiquetas HTML
    //innerText accede al texto

var elementoId = document.getElementById("segundo");*/

    


/*//Creando Nodos del DOM

var elemento = document.createElement("h2");
    //1. Crear el elemento
    //createElement crea un elemento  

var contenido = document.createTextNode("Este es el título");
    //2. Crear el nodo de texto

elemento.appendChild(contenido);
    //3. Añadir el nodo de texto al elemento
    //appendChild agrega un contenido (contenido) a una etiqueta (h2)

elemento.setAttribute("align", "center");
    //4. Agregar atributos al elemento
    //setAtribute 

document.getElementById("subtitulo").appendChild(elemento);
    //5. Agregar el elemento al documento*/





/*//Agregando Nodos al DOM


var elemento = document.createElement("li"),
    contenido = document.createTextNode("Nuevo texto");

elemento.appendChild(contenido);
    //appendChild agrega elementos al final

//var padre = document.getElementById("lista");
    //or
var padre = document.getElementsByTagName("li")[0].parentNode;
        //parentNode retorna el padre del nodo del texto. En este caso devuelve ol.

var hijos = document.getElementsByTagName("li");

padre.insertBefore(elemento, hijos[1]);
    //insertBefore inserta el elemento con una referencia del hijo.*/




/*//Modificando, Remplazando y Eliminando Nodos del DOM


var primerElemento = document.getElementById("primero");

primerElemento.innerHTML = "Nuevo texto <b class='foo'> (HTML)</b>";
    //innerHTML accede al texto con sus etiquetas
    //or
//primerElemento.textContent = "Nuevo texto <b>(text)</b>";
    //textContent accede únicamente al texto

var elemento = document.createElement("li"),
    contenido = document.createTextNode("Segundo nuevo texto");

elemento.appendChild(contenido);

var padre = document.getElementById("lista"),
    referencia = document.getElementsByTagName("li");

padre.replaceChild(elemento, referencia[1]);
    //Reemplaza un elemto por otro  1. Elemento que queremos agregar. 2. El elemtno que queremos eliminar.

padre.removeChild(referencia[2]);
	 //removeChild elimina elemtno del DOM*/




/*//Acceso a los atributos del DOM

var elemento = document.createElement("div");

var padre = document.getElementById("contenedor"), //section
    hijo = document.getElementsByTagName("div");

//elemento.setAttribute("class", "red");
    //or
elemento.className = "blue";

padre.insertBefore(elemento, hijo[0]);*/



/*//Modificando el estilo de los elementos

var encabezado = document.getElementById("Encabezado");

encabezado.className = "titulo tituloGrande";
    //para agregar dos clases a un elemento se escriben en el misma varriable
    //or
encabezado.style.padding = "50px"
    //Agrega estilos directamente desde JS.*/




//(Practica) Modificando el estilo de los elementos


/*var zoom = function(){
    var thumb = document.getElementById("thumb");

    if (thumb.className == "thumb") {
        thumb.className = "thumb grande";
    }else{
        thumb.className = "thumb";
    
    
}*/


/*//Eventos del DOM

(function(){

    var saludo = function(e){
        console.log("Hola");
        //type muestra el tipo de evento que se está ejecutando
        //Target muestra a qué elemento se le está asignando el evento
        e.preventDefault();
        //preventDefault quita los eventos que haría por defecto un elemento
    };

    var boton = document.getElementById("boton");
    boton.addEventListener("click", saludo);
    //saludo es una funcion. Sin ().
    //removeEventListener elimina un evento

}())*/




//Formularios

/*(function(){
    var formulario = document.getElementsByName("formulario")[0],

        boton = document.getElementById("btn");

    var validarNombre = function(e){
        if (formulario.nombre.value == 0) {
            alert("Ingresa el nombre")
            e.preventDefault();
        }
    };

    var validarRadio = function(e){
        if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true) {
        }else {
            alert("También el campo sexo.");
            e.preventDefault();
        }
    };

    var validarCheckbox = function(e){
        if (formulario.terminos.checked == false) {
            alert("Acepta los terminos.");
            e.preventDefault();
        }
    };

    var validar = function(e){
        validarNombre(e);
        validarRadio(e);
        validarCheckbox(e);
    };

    formulario.addEventListener("submit", validar);

}())*/




/*//TIMERS, TIMEOUT E INTERVAL

(function(){

    var contador = 0;

    var saludo = function(){
        contador++;
        console.log(contador);

        setTimeout(saludo, 1000);


        if (contador == 5) {
            clearInterval(intervalo);
            //Termina el conteo hasta que llegue a 5.
        }
    };

    saludo();

    //setTimeout(saludo, 3000);
    //se ejecuta en el tiempo que le asignemos. Una sola vez.

    //var intervalo = setInterval(saludo, 1000);
    //Se ejecuta cada cierto tiempo



}()); 
*/



// FECHAS Y TIEMPO (DATE)

(function(){

    var fecha = new Date();
    var hora = fecha.getHours() - 12;
    var minutos = fecha.getMinutes();

    console.log(hora);
    console.log(minutos);


}());






































