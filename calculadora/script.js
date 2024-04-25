// Seleção dos elementos
const display = document.querySelector("#displayInput")
const botaoIgual = document.querySelector(".igual")
const botaoPonto = document.querySelector(".ponto")
const botoesNumeros = document.querySelectorAll(".num") 
const botoesOperadores = document.querySelectorAll(".operador")//selectALL pois há mais de um botão, se não o forEach n funciona
const botaoCe = document.querySelector(".cls") 
// Variáveis globais
let operacaoAtual = ""
let operador = null;
let valorAnterior = ""
let calculando = false

// Funções
function atualizacaoDisplay(){
    display.value = operacaoAtual
}

function insereNumero(evento){
    if(calculando){
        operacaoAtual = evento.target.textContent
        calculando = false 
    }else{
        operacaoAtual += evento.target.textContent
    }
      atualizacaoDisplay()//callback
}

function inserePonto(evento){
    if(operacaoAtual.indexOf(".") === -1){ //indexOf("")veificou se havia um.
        operacaoAtual += "."
        atualizacaoDisplay()
    } 
}

function insereOperador(evento){
    if(operacaoAtual !== ""){
        if(!calculando){
            if(operador !== null){
                calcula()
            }
            valorAnterior = operacaoAtual
            operacaoAtual = ""
        }
        operador = evento.target.textContent
    }
}

function limpaDisplay(evento){
    operacaoAtual = ""; // Limpa a operação atual
    operador = null; // Redefine o operador
    valorAnterior = ""; // Limpa o valor anterior
    calculando = false; // Redefine a flag de calculando
    
     atualizacaoDisplay(); // Atualiza o display
    }
    

function calcula(){

    let resultado = null
    const operandoAnterior = parseFloat(valorAnterior)
    const operandoAtual = parseFloat(operacaoAtual)

    switch(operador){
        case "+":
        resultado = operandoAnterior + operandoAtual
        break
        case "-":
        resultado = operandoAnterior - operandoAtual
        break
        case "*":
        resultado = operandoAnterior * operandoAtual
        break
        case "/":
        resultado = operandoAnterior / operandoAtual
        break
    }

    operacaoAtual = String(resultado)
    valorAnterior = operacaoAtual
    calculando = true
    atualizacaoDisplay()
}

//Eventos
botaoPonto.addEventListener("click",inserePonto)
botoesNumeros.forEach((botao) => botao.addEventListener("click", insereNumero))
botoesOperadores.forEach((botao) => botao.addEventListener("click", insereOperador))
botaoIgual.addEventListener("click", calcula)
botaoCe.addEventListener("click",limpaDisplay )