// DOM - Document Object Model 

/*
document.querySelectorAll sempre retornam um array

document.getElementsByClassName - sempre retornam um array
document.getElementsByName - sempre retornam um array
document.getElementsByTagName - sempre retornam um array

document.querySelector - sempre retorna o elemento diretamente

Class pode ter várias
Id deve sempre ser único

*/

/*
Eventos ao clicar
 - Quando ocorre um clique em algum lugar na tela
*/

//1º Função sendo chamada pelo HTML no botão pelo onclick()
/*
  function clicou() {
  console.log("Vc clicou aqui!")
   }  
*/ 

//2º Definindo EVENTO de clique no botão diretamente pelo JS
/*
let botao = document.querySelector(".botao")
botao.addEventListener("click", () => {clicou()})
*/

/*
Opções de CHAMADA da função:
1) botao.addEventListener("click", clicou)

2) botao.addEventListener("click", function(){
      clicou()
   })

3) botao.addEventListener("click", () => {
   clicou()
   })

*/

//MANIPULANDO O DOM
//children: Returns the child elements.
//innerHTML: altera o conteudo interno de um elemento HTML. Add um elemento
//innerText: recupera e define o conteúdo da tag como texto simples
//append: adiciona mais um no final do conteudo que já tem, somente funciona para "texto"
//appendchild: adiciona um elemento no final daquilo/elemento que desejo add.
//prepend: adiciona um texto no começo da lista


function clicar(){
  const teste = document.querySelector("#teste")
  const ul = document.querySelector("ul")
  //console.log(teste.children[0].children) //ul > li
  
  //FORMAS DE ADICIONAR UM ELEMENTO A LISTA:
  ul.innerHTML += "<li>Item alterado</li>"
  //ul.innerText += "<li>Item alterado</li>"
  //ul.innerHTML = "<li>Item alterado</li>" - substitui toda lista
  //ul.children[1].innerHTML = 'Novo item - Alteração'
  //ul.children[2].innerText = "<li>Item alterado</li>"  
  //ul.children[2].innerText = '<strong> Testando teste </strong>'

  //ul.children[0].append(('alterado'))
  //ul.append('<li>Item adicionado</li>') //retorna um texto e não uma tag HTML 

  let newLi = document.createElement('li')      
  newLi.innerText = 'Começo - Item adicionado'
  ul.prepend(newLi)
 

}

 /*
 Adicionando elemento HTML e depois inserindo no local desejado:
  let newLi = document.createElement('li')       //criando elemento 
  newLi.innerText = 'Quarto - Item adicionado'   //passando informação no elemento

  ul.appendChild(newLi)                          //adicionando elemento a lista
  */


//Adicionando informações ao redor do elemento:
function apertar (){
  const ul = document.querySelector("ul")
  ul.after('Texto Novo Inserido') //Depois da ul, inserimos um texto


  //Adicionando um botão
  const newButton = document.createElement('button')
  newButton.innerHTML = 'Botão' //Pode ser assim tambem: newButton.innerText
  ul.before(newButton)

  //Criando nova Ul e Li
  let newUl = document.createElement('ul')   //criando Ul
  for(let i = 0; i <= 3; i++){
    let newLi = document.createElement('li') //criando Li
    newLi.innerHTML = 'Dia ' + i             //inserindo texto da lista
    newUl.append(newLi)                      //inserindo nova lista
  }
  ul.after(newUl)                            //inserindo nova ul após ul existente
}

//Pegando atributos de um elemento

//getAttribute(): Retorna/Pega o tipo do atributo, ou conteudo do atributo
//setAttribute(): Define o atributo e o valor. Incluir o alterar um atributo que já existe.

function testar (){
    const input = document.querySelector('input')
    console.log(input.getAttribute('type')) // ou placeholder

    //Verificar se atributo existe no HTML:
    if(input.hasAttribute('placeholder')){
        console.log('Tem placeholder')
      } else {
        console.log('Não tem placeholder')
      }

      //Alterando o nome do BOTÃO da senha ao clicar:
      const botao = document.querySelector('#btn')
             
      //Alterando um atributo: nome do atributo/valor a ser inserido
      if(input.getAttribute('type') === 'text'){
        input.setAttribute('type', 'password')
        botao.innerHTML = "Mostrar Senha"
      }else {
        input.setAttribute('type', 'text')
        botao.innerHTML = "Ocultar Senha"
      }

  }


  //Manipulando CSS "inline" nos elementos - alteração
  function executarAcao(){
    const li = document.querySelector('li') //pegando a lista
    li.style.backgroundColor = 'blue'
    li.style.fontSize = '40px'

    const button = document.querySelector('button')
    //console.log(button.classList) 
    //para testar classlist, comentar os outros botões HTML

    //Inserindo e removendo classe pelo JS
    /*
    if(button.classList.contains('azul')){
      button.classList.remove('azul')
      button.classList.add('verde')  
    } else{
      button.classList.remove('verde')
      button.classList.add('azul')
    }
    */
   //Executar o mesmo processo acima
   //button.classList.toggle('azul')

   //Trocando de um para o outro:
   button.classList.replace('azul', 'verde')
     

  }


  
