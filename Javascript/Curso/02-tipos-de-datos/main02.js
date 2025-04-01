//1 - Aqui veremos mas a fondo que son los tipos de datos y como se utilizan


//-1.1 String

let string = "Esto es un string"
let string2 = 'Esto tambien es un string'
//podemos poner el texto dentro de comillas dobles o simples, no cambia nada 

//Si lo queremos ver aplicado a un ejemplo real:
let steamUserName = "Juan"
const dni = "x820394753" //tambien podemos meter numbers dentro de un string lo unico que ya no seran numbers sino strings y esto lo podemos ver usando el typeof


//-1.2 Numeros
let numeros = 123456789 //para los numeros no nos hace falta poner comillas 
let numeros_float = 1.80 //tambien podemos usar puntos para hacer referencia a que es decimal


//-Ejemplo real
let numeroDeTelefono = 634860987
let altura = 1.83


//-1.3 Boolean
let boolean = true //este tipo de dato solo puede ser falso o verdadero y lo podremos usar mas adelante para verificar datos 

//-Ejemplo real:
let casado = false
let hombre = true


//-4 Undefined
let undefinedValuve //undefined es un tipo de dato interesante ya que puede ser confuso al principio, pero, su uso mas que nada es guardar nada para que en un futuro nosotros podamos asignarle un valor desde fuera del editor de texto, mas adelante veremos como se usa



//-5 Null
let nullValuve = null //a diferencia de undefined, aqui decimos que la variable no tiene ningun valor, ni lo tendra es como decir que no existe, aunque parezca que no sirve para nada, nos sirve para verificar si algo esta vacio o no, luego veremos su uso mas adelante




//-7 BigInt
let bigInt = BigInt("3.1414960593758543464363456") 
let bigInt2 = 2456324572457247258248262457456242n

//este tipo de dato se utiliza para agregar numeros demasiado largos para guaradarlos en number, como por ejeplo el pi, no es un dato que se use mucho pero es interesante saber que existe


//Practica

//1 Crea la variable nombre y asignale tu nombre
let nommbre = "Juan"

//2 crea la varible edad y asignale tu edad
let edad = 1

//3 crea la variable altura y asignale tu altura 
let altura_test = 1.80

//4 di si estas casado o no (boolean)
let casado_test = false

//5 agrega tu DNI (string y const)
const dni_test = "X12345567"
