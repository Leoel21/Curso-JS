/*para comparar datos usamos algo llamdo operadores, que son simbolos que nos permiten comparar datos*/

//como se si un tipo de dato es mayor o menor que otro?

let a = 5
let b = 10
let c = 5

//a es mayor que b?

let primeraDuda = a > b //nos devuelve falso ya que los comparadores simpre devuelven booleanos 

//a es menor que b?
let segundaDuda = a < b //nos devuelve true 

//a es igual que b?
let terceraDuda = a == b //nos devuelve false

//Si por ejemplo queremos saber si es el mismo dato, y el mismo tipo de dato, tenemos que usar el triple igual

let edad = 18
let edad2 = "18"

let cuartaDuda = edad === edad2 //falso ya que uno es number y el otro string


//Como saber si es diferente?

let quintaDuda = edad != edad2 //true ya que son tipos de datos diferentes 


//como saber si es diferente y el mismo tipo de dato?
let sextaDuda = edad !== edad2 //true ya que son tipos de datos diferentes

//como saber si es mayor o igual?
let septimaDuda = a >= b //false ya que 5 no es mayor o igual que 10

//como saber si es menor o igual?
let octavaDuda = a <= b //true ya que 5 es menor o igual que 10



//como hacer una verificacion? se una && (and) que nos dice, esta parte es true? && esta parte es true? pues nos devuelve true, si una falla nos devuelve false
let novenaDuda = a  > b && a < c //false ya que 5 no es mayor que 10 y 5 no es menor que 5

//como hacer una verificacion? se una || (or) que nos dice, esta parte es true? || esta parte es false? pues nos devuelve true ya que si una de las dos es true, nos devuelve true
let decimaDuda = a>b || a<c //true ya que 5 no es mayor que 10 pero 5 es menor que 5


//Como podemos saber que tipo de dato estamos trabajando?
//con el operador typeof, que nos devuelve el tipo de dato que estamos trabajando
let tipoDeDato = typeof a //number
let tipoDeDato2 = typeof b //number
let tipoDeDato3 = typeof c //number
let tipoDeDato4 = typeof edad //number
let tipoDeDato5 = typeof edad2 //string



