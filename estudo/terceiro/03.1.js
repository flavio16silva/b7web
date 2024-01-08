// DOM - Document Object Model 

//Eventos e teclado

// function apertou(){
//   console.log('Apertou!')

// }

// function segurou(){
//   console.log('Segurou!')
// }

function soltou(e){
  console.log('Tecla Apertada: ' + e.code)
  console.log('shift? ' + e.shiftKey)
  console.log('---')
}


//Ouvindo o evento pelo JS ao clicar em qualquer tecla.
//primeiro parametro: nome do evento
//segundo paramentro: nome da função, sem parentes

//document.addEventListener('keyup', soltou)


//Qual tecla o usuario apertou dentro do input
const input = document.querySelector('input')
input.addEventListener('keyup', soltou)

//Identificando qual tecla foi digitada:
/*
function soltou(e){
  console.log(e.code) - MOSTRA A TECLA
}

Podemos usar o (e.key), que retorna de forma mais simples.Não informa as teclas da direita ou esquerda. 

Podemos saber também se shift, alt e ctrl foram pressionados atraves dessa sintaxe:
('shift? ' + e.shiftKey), basta alterar o nome shift
*/



