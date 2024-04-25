console.log ("Olá, mundo!")

//ex. 2 conversão de tipos
const minhaVar = "1234"

const minhaVar2 = Number (minhaVar)
console.log (typeof minhaVar2)

//ex. 3 Manipulaçao

const minhaString = "Javascript é incrivel"
const numeroDeCararcteres = minhaString.length
const numeroDePalavras = minhaString.split(" ").length

console.log(`O número de caracteres é : ${numeroDeCararcteres}`)
console.log (`o número de palavras é de: ${numeroDePalavras}`)

//ex. 4 loop e array
const nomes = ["Gui","Bru","Bel","Ri","Ro"]

for (let i = 0; i < nomes.length; i++){ 
//let i = 0 é o contador | i< nomes.lengh condição, i menor que qntd (array) dos nomes | i ++ passar pelos nomes
    console.log(nomes[i]) // o indice foi uma variavel [i] e não um valor fixo [0]
}

//ex. 5 func, str e math
function converterHorario(horario24){
    /*const hora = horario24.split(":")[0]
    const minuto = horario24.split(":")[1]*/

    const [hora,minuto] = horario24.split(":") //split indica onde se divide hora dos min

    const hora12 = hora % 12 || 12 //|| usado para dizer que se fizer 12/12 usar nº12 ao invés de 0
    let periodo = "AM"

    if (hora > 12){
        periodo = "PM"
    }
    
    console.log(`${hora12}:${minuto} ${periodo}`)
}

converterHorario("15:16")

converterHorario("09:59")

converterHorario("19:45")