//1 - Una variable es una espacio donde nosotros guardamos un dato que le asignenemos a la variable y existen varios tipos de datos

//String = "es texto"
//number = 1 2 3 son numeros
//boolean = true o false 
//null = un tipo de dato no no almacena nada
//undefined = como su nombre lo dice no tiene un valor asignado 

//estos son los que nos interesa por el momento, existen mas pero a medida que avancemos veremos mas


//2 - Tipos de variables
//En Js hay 3 tipos de variables, var, let y const

//var es el tipo de variable, metodo viejo es el nombre y lo de despues del igua es el valor que le asignamos
var metodoViejo = "es el metodo antiguo que no se recomienda usar"

let metodoRecomendado = "Es el metodo actual y el recomendado"

const metodoDiferente = "Const es un tipo que no se puede cambiar una vez agreagado el valor"

//Si yo pongo otra vez const metodoDiferente y le doy otro valor dara error ya que no se puede actualizaar a diferencia de let o var

//para imprimirlo usamos el mismo metodo de console.log lo unico que en vez de poner un string ponemos la variable
console.log(metodoViejo) //Salida: es el metodo antiguo que no se recomienda usar

