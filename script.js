var visor = document.querySelector('#res')
var sub = document.querySelector('#isubt')
var som = document.querySelector('#isoma')
var mul = document.querySelector('#imult')
var div = document.querySelector('#idivi')
var n1 = document.querySelector('#n1')
var n2 = document.querySelector('#n2')
var num = ''
var num1 = ''
var num2 = ''
var seletor = 0

function zero() {
    num += 0
    visor.innerHTML = num
}

function um() {
    num += 1
    visor.innerHTML = num
}

function dois() {
    num += 2
    visor.innerHTML = num
}

function tres() {
    num += 3
    visor.innerHTML = num
}

function quatro() {
    num += 4
    visor.innerHTML = num
}

function cinco() {
    num += 5 
    visor.innerHTML = num
}

function seis() {
    num += 6
    visor.innerHTML = num
}

function sete() {
    num += 7 
    visor.innerHTML = num
}

function oito() {
    num += 8
    visor.innerHTML = num
}

function nove() {
    num += 9
    visor.innerHTML = num
}

function limpar() {
    num = ''
    num1 = ''
    num2 = ''
    n1.innerHTML = 'Número : '
    n2.innerHTML = 'Número : '
    seletor = 0
    visor.innerHTML = num
}

function enviar() {
    if(seletor == 0){
        num1 = num
        seletor++
        num =''
        n1.innerHTML += `${num1}`
        visor.innerHTML = ''
    }else{
        num2 = num
        seletor++
        num = ''
        n2.innerHTML += `${num2}`
        visor.innerHTML = ''
        if(sub.checked){
            num = +num1 - +num2
        }else if(som.checked){
            num = +num1 + +num2
        }else if(mul.checked){
            num = +num1 * +num2
        }else{
            num = +num1 / +num2
        }
        seletor = 0
        visor.innerHTML = `${num}`
    }
}
