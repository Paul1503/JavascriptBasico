//alertas: so una función a la cual le pasamos un parametro
alert("Hola soy Paul Arellano");

//variables(cajita donde guardamos información) en javascript tenemos tres tipos de variables
//las variables con let tienen mejor rendimiento.

let nombre = "Paul Arellano";
nombre = "Paul";
//constantes no podemos cambiar su valor a diferencia de las variables

const apellido= "Arellano";
const altura = 173;

//Mostrar por consola
console.log(nombre);
console.log(altura);

//concatenación

let concatenacion = nombre + " " +apellido;

console.log(concatenacion);

//Llamamos elementos de la página y trabajarlas con JS

let datos = document.querySelector("#datos");

//introducirle datos al div seleccionado
//al comienzo lanza un error que considera que los valores del ineer son nulos
//problema que se soluciona poniendo defer en el link de conexion del html al js 


datos.innerHTML = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre} ${apellido}</h2>
`;

//condiciones

if(altura>=185){
    datos.innerHTML+= "<h1>eres una persona alta</h1>";
}else{
    datos.innerHTML+= "<h1>eres una persona bajita</h1>"
}

//bucles
for( let year = 2000; year<=2023; year++){
    datos.innerHTML += `<h2>Estamos en el año: ${year}</h2>`;
}

//arrays

let nombres =  ["Paul", "Sofia", "Camila", "Esteban"];
let divNombres = document.querySelector("#nombres");

//Se puede mostrar llmando a la ubicacion
divNombres.innerHTML = nombres[1];

// Se puede mostrar con un bucle

divNombres.innerHTML = "<h1>Listado de nombres</h1> <ul>";

nombres.forEach(nombre =>{
    divNombres.innerHTML += "<li>"+nombre+"</li>";
});

divNombres.innerHTML += "</ul>";

//funciones

const miInformacion = (nombre, altura) => {
    let misDatos =` <h1>Soy la caja de datos</h1>
                    <h2>Mi nombre es: ${nombre}</h2>
                    <h3>Y mi altura es: ${altura}</h3>`

    return misDatos;
}

console.log(miInformacion("Paul Arellano",173));

const imprimir= ()=>{
    let datos= document.querySelector("#datos");
    datos.innerHTML = miInformacion("Paul Arellano", 173);
}

imprimir();