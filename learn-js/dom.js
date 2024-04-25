//DOM - Document Objetc Model

//Selecionar Elementos
const elementoPorId = document.getElementById("meuId")

const elementoPorId2 = document.querySelector("#meuId")

console.log (elementoPorId2)

const elementoPorClasse = document.getElementsByClassName ("minhaClasse")

console.log (elementoPorClasse)

const elementoPorClasse2 = document.querySelector (".minhaClasse")

console.log (elementoPorClasse2)
//com o .queryselector é mais organizado e mais usado (# | .)

//Manipular conteudo de texto
const element = document.querySelector("#meuId")

console.log (element.textContent) 
setTimeout(() => {
    element.textContent = "Mudei de texto"
}, 1000);

//trabalhando com atributos
const link = document.querySelector("a")

link.setAttribute("href", "https://youtube.com.br") //add atributo

console.log(link.getAttribute("href")) 
console.log(link.hasAttribute("target")) //Verificar se há atributo

link.removeAttribute("target")

//manipulção de classes do CSS 
const elemento = document.querySelector("#meuId")

element.classList.add("novaClasse")

element.classList.remove("novaClasse")

element.classList.toggle("outraClasse") //se a classe exite ele remove se não ele coloca

//manipular o Css
const elemento3 = document.querySelector("#meuId")

elemento3.style.color = "blue" //método in-line de style
elemento3.style.backgroundColor = "green"

//navegação entre nós  = navegar em elementos 
/*const element4 = document.querySelector("meuInput")

const pai = element4.parentNode
console.log(pai)

//obter o 1º filho 

const primeiroFilho = pai.firstChild
console.log(primeiroFilho)*/

//Manipulação de  estrutura DOM 
const novoElemento = document.createElement("div")
console.log (novoElemento)

novoElemento.textContent = ("minha div de JS")
document.body.appendChild(novoElemento) //inserir no html
document.body.insertBefore(novoElemento, elemento3)
document.body.removeChild (elementoPorId)

//eventos
//click
const botao = document.querySelector("button")

botao.addEventListener("click", function(){
    console.log("Botão clicado!")
})

//mouse
const elemento5 = document.querySelector("#meuFormulario")

elemento5.addEventListener("mouseover", function(){
    console.log("o mouse passou aqui!")
})

//teclado
const campoInput = document.querySelector("#meuInput")

campoInput.addEventListener("keydown", function(){
    console.log("Tecla presionada")
})

//formulario
const form = document.querySelector("form")

form.addEventListener("submit",function(event){
    event.preventDefault()
    console.log("Formulario enviado")
})

//propagação de eventos
document.querySelector("#elementoPai").addEventListener("click",function(){
    console.log("Evento capturado no pai")
})

document.querySelector("#elementoFilho").addEventListener("click",function(event){
   // event.stopPropagation()
    console.log("Evento capturado no Filho")
})


document.querySelector("#meuLink").addEventListener("click",function(event){
    event.preventDefault() //impede de ir para o link
    console.log("Clicou no link")
})

//delegação de evento
document.querySelector("#elementoPai").addEventListener("click", function(event){
    if (event.target.matches(".classeDosFilhos")){
        console.log("Evento delegado para o filho")
    }
})

