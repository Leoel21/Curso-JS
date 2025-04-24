//Las variables son celdas donde se almacena informacion es decir es un espacio en memoria
// y para poder acceder a esa informacion tenemos que darle un nombre a la variable
// y para eso usamos la palabra reservada var, let o const

//Var es la manera vieja de hacerlo aunque a dia de hoy tambien se utiliza
var nombre = "Leo"

//let es la manera nueva de hacerlo
let apellido = 'Hernandez'

//const es diferente, const se utiliza para declarar una varibale que no va a cambiar
const fechaDeNacimiento = 1990


//Aparte de esas tres, hay mas tipis de variables, en total hay 7, entre las cuales esta 

//1- Tipo string

let nombreCompleto = "Leonardo Hernandez"

//2- tipo number 
let edad = 45

//3- tipo boolean
let esMayorDeEdad = true

//4- tipo undefined
let noDefinido  //este aunque parezca que no sirve para nada, en un futuro le daremos el valor que queramos

//5-tipo null 
let nulo = null //es un valor vacio, es decir que no tiene nada, pero si lo tiene

//6-tipo simbolo
let simbolo = symbol("Hola") //es un valor unico, es decir que no se puede repetir, es como un id

//7- tipo objeto
let objeto = {
    nombre: "Leonardo",
    apellido: "Hernandez",
    edad: 45,
    esMayorDeEdad: true
} 

//es un conjunto de datos, es decir como si fuera una tabla de info, donde para acceder a los datos tenemos que hacer objeto.nombre 
//y nos devuelve Leonardo




