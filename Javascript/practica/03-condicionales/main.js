//verificador de edad

let edad = 11
if(edad >= 18){
    console.log("puedes pasar")
} else{
    console.log("Eres menor")
}
//dia de la semana

let dia = 0
let nombreDelDia;

switch(dia){
    case 0:
        nombreDelDia = "Lunes"
        break
    case 1:
        nombreDelDia = "Martes"
        break
    case 2:
        nombreDelDia = "Miercoles"
        break
    case 3:
        nombreDelDia = "Jueves"
         break
     case 4:
        nombreDelDia = "Viernes"
         break
    case 5:
         nombreDelDia = "Sabado"
         break
    case 6:
         nombreDelDia = "Domingo"
         break        
}

console.log(nombreDelDia)

//username y password

let username = "Leoel21"
let password = "Rafron0x14_"

let usernamewritte = "Leoel21"
let passwordwritte = "Rafron0x14_"

if (username == usernamewritte && password == passwordwritte){
    console.log("Datos correctos")
} else{
    console.log("Usuario o password incorrectos")
}