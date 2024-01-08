//Elementos
const input = document.querySelector('input')
const lista = document.querySelector('ul')

//Funções
function soltou(e) {
  if(e.key === 'Enter'){
    //adicionar elemento LI na lista
   const newLi = document.createElement('li')
   newLi.innerHTML = input.value
   lista.appendChild(newLi)
   
   //Limpar o campo texto
   input.value = ''
  }
}

//Eventos
input.addEventListener('keyup', soltou)


/*
ESSE TIPO DE CODIGO ENTREGA O RESULTADO DA ADIÇÃO DE UM NOVO ELEMENTO, MAS CASO A LISTA SEJA GRANDE, ESTA SERÁ TODA RENDERIZADA CAUSANDO EXCESSO DE PROCESSAMENTO.

lista.innerHTML += "<li>" + input.value + "</li>"
*/