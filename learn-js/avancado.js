// Manipulação de arrays

const frutas =["Maça", "Laranja"]

frutas.unshift ("Acerola") //unshift add no começo do array

console.log (frutas)

frutas.shift() //remove o 1º array

console.log (frutas)

//map, filter, reduce, arrow function

const numeros = [1,2,3,4,5,6]

//find só retorna o 1º elemento do critério
const numeroPar = numeros.find((num)=> num % 2 ===0)

console.log(numeroPar)
//filter retorna todos os elementos que batem com o critério
const nuemrosPares = numeros.filter((num)=>num % 2 ===0)

console.log(nuemrosPares)

//manipulação de str
const frase = " Olá, mundo   "

const palavras = frase.trim()

console.log (frase)
console.log (palavras)

const frase2 ="Javascript é incrivel!"

console.log(frase2.startsWith("Java"))
console.log (frase2.endsWith("!"))

//Exeções e tratamentos de erro 
/*const idade = 15
if (idade< 18){
    throw new Error ("Voçê deve ter no minimo 18 anos.")
}*/

try {
    const idade = 15
if (idade< 18){
    throw new Error ("Voçê deve ter no minimo 18 anos.")
}

    
} catch (error) {
    console.log (error.message) //try catch não encerra o programa e mostra a menssagem 
}

console.log ("Continuar programa...")

//callback => func
function cumprimentar (nome, callback){
    console.log("Olá " + nome)
    callback()
}

function mostrarSaudacao(){
    console.log("Como vc está?")
}

cumprimentar ("Guilherme",mostrarSaudacao)

cumprimentar("Bruna", function(){
    console.log ("Tá tudo bem?")
})

//set timeOut => dps de um tempo execulta algo, uma vez
function mostrarMensagem(){
    console.log ("Essa mensagem será exibida após 3s")
}
//1000ms = 1s
//setTimeout(mostrarMensagem,3000)

//setTimeout (function(){
 //   console.log("Oi")
//}, 1000)

//promises
const promessa = new Promise((resolve, reject) => {
    const condicao = false

    if (condicao){
        resolve("A condição é vdd") //resolve cai no then
    }else {
        reject("A condição é falsa")
    }
})

promessa.then((mensagem) =>{  //then vai executar a promessa 
    console.log(mensagem)
}) 
.catch((erro) =>{
    console.log(erro)
})

//bibliotecas feitas que são "promise based"

const promise1 = Promise.resolve(3)
const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve,2500, "Testando")
})
Promise.all([promise1, promise2]).then((valores) =>console.log(valores))
    //Promisse.all vai rodar todos os promises que estivirem nele usando o .then

//async await
async function obterValor(){

    const promessa = new Promise((resolve, reject) => {
        setTimeout(()=> resolve("valor obtido"), 2000)
    })
    
    const valor = await promessa //await espera a promessa chegar

    console.log(valor) // após a chegada roda esse console
}

obterValor()

async function obterValorComErro (){

 try {
    const promessa = new Promise((resolve, reject) => {
        setTimeout(()=> resolve("valor com erro"), 2000)
    })
    
    const valor = await promessa

    console.log(valor) 
}   catch (error) {
    console.log(error)
    
 }

// utilizar try-catch com async-await ao invés de then-catch
}

obterValorComErro()

//JSON (js object notation)
//{nome: "teste"} => {"nome": "teste"}
//padroniza comunicação, front e back 1 ling só
//rever coisas de JSON*
const objeto = {nome: "joão", idade: 30}

const jsonString = JSON.stringify(objeto)

console.log(jsonString)
console.log (typeof jsonString)

const json = '{"nome": "joão", "idade": 30}'

const objeto2 = JSON.parse(json)

console.log (objeto2)
