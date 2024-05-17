var valorResultado = document.getElementById('resultado')
var mudartema = document.getElementById('alterartema')
let conta
var containerCalculadora = document.querySelector('.container_calculadora')

function valorinput(value){
    
    conta = valorResultado.value += value
}

function calculo(){
   var resultado = eval(conta)
   valorResultado.value = resultado
}

function Limpar(){
    valorResultado.value = ""
}

function porcentagem(){
    valorResultado.value = valorResultado.value / 100
}

function tema(){
    const cor = document.body.style.backgroundColor;
   if(cor === 'black' || cor === '')
    {
        document.body.style.backgroundColor = 'white'
        valorResultado.style.backgroundColor = 'white'
        containerCalculadora.style.borderColor = 'black'
        valorResultado.style.color = 'black'
    }else{
        document.body.style.backgroundColor = 'black'
        valorResultado.style.backgroundColor = 'black'
        containerCalculadora.style.borderColor = 'white'
        valorResultado.style.color = 'white'
    }
    
}