//Fundamentos
//var nome = "valor" str
var minnhaVar = "Olá  mundo";

console.log (minnhaVar);

// Variáveis e Tipos de Dados
var meuNumero = 10;

console.log(meuNumero + 5);

console.log(typeof meuNumero)

var booleano = true;

console.log(typeof booleano)

var meuObjeto = {}
var meuArray = []
var meuNull = null
var meuUndefined = undefined

//let e const, formas de declarar variáveis

let x = 10
const y = 5
// DÊ preferência usar mais const

console.log(x,y)

//Operadores aritméticos
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)

//Operador de Comparação
console.log(x == y)
console.log(x != y)

console.log("5" === 5)
console.log("5" == 5)
console.log("5" !== 5)
// Sempre usar 3 = ou !==

//Operador Lógico
// AND &&
// OR ||
console.log(10> 5 && 20> 5)
console.log(10> 5 && 20< 5)

console.log(10> 5 || 20> 5)
console.log(10> 5 || 20< 5)

//Conversão de tipos
const meuNumero2 = "123"

const meuNumeroinvertido = Number (meuNumero2)

console.log (meuNumeroinvertido)

//Estrutura de Condição - if, else, else if

const idade = 16

if(idade < 13){
    console.log ("criança")
}
else if(idade< 20){
    console.log ("Adolescente") 
}
else {
    console.log ("Adulto")
}

//switch
const fruta = "Mamão"

switch (fruta){
    case "Banana":
    console.log("Banana é a fruta")
    break // Usar break ao final de cada case 
     case "Maçã":
    console.log ("Maçã é a fruta")
    break
    default:
        console.log ("Fruta não encontrada!")
}

//Estrutura de Repetição
//Contador, condição limite, incremento
/*for (let i = 0; i < 5; i = i ++) {
    console.log("O valor de i é: " + i)
}*/
let i = 0
while (i < 5){
    console.log("O valor de while é: " + i)
    i++
}

// Do while
let j = 0

do {
    console.log ("o valor do j é: " + j)
    j++

}while(j < 5)

//Funções
//function nome(arg1, arg2){corpo}
function cumprimentar (nome) {
    console.log ("Olá " + nome)
}
//invocação = nome()
cumprimentar("Gui")

//escopo de variáveis
let cor = "Azul" //fora de chaves escopo global

function mostrarCor () {
    let cor = "verde"    //o que está em chaves é escopo local
    console.log(cor) 
}

console.log(cor)

mostrarCor()

//hoisting = inçamento

testeHoisting()

function testeHoisting() {
    console.log ("Deu certo!")
}

//arrow function
const testeArrow = () => console.log ("isso tbm é uma func")

testeArrow()

//truthy e falsy
const minnhaVariavel1 = "" //falsy
const minnhaVariavel2 = "Tem algo escrtito!" // truthy

if(minnhaVariavel2){
    console.log ("É verdadeiro!")
}else{ 
    console.log ("É falso!")
}

//array, listas 
const numeros = [1,2,3,4,5] //vetores entre chaves

console.log (numeros)

console.log (numeros[0])
console.log (numeros[2])

numeros.push (6) // add mais um vetor no array usando .push

numeros.pop () // exclui número de vetores usando .pop

console.log (numeros)

//strings
const minhaStringNova = "Olá mundo"
//concatenação = +
const minhaString3 = minhaStringNova + ", como você esta?"

console.log (minhaString3)

//intapolaçaõ
const minhaString4 = `${minhaStringNova} Como voçê está?`
console.log (minhaString4)

console.log (minhaString4.length) // me mostra qnt de caracter
console.log (minhaString4 [5])// mostra o 5 elemento

// data e hora
const agora = Date ()
console.log (agora)

const natal = new Date (2024, 11, 25) // 11 cause mounth start from 0
console.log (natal)

//math
console.log (Math.PI)

console.log (Math.round(5.6)) //Arredonda

console.log(Math.sqrt(16)) //Raiz qdd

console.log(Math.pow(2,3)) //potencia