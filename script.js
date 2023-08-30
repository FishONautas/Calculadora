let previewOperacao = document.getElementById('operacao-preview')
let atualOperacao = document.getElementById('operacao-atual')
// declarando variavel pelo ID

let buttons = document.querySelectorAll("#botoes-container button")
// declarando variavel através de todo elemento que se identifica como "button" dentro da div #botoes-container, por isso usamos o querySelectorAll
// o getElementById seleciona apenas um elemento especifico que se indetificar com o ID
// o querySelector tem a mesma funcionalidade do getElementById, porém ele trás mais possiblidades de requisitarmos o elemento como através da classe por exemplo.
// o querySelectorAll serve para capturar uma lista de elementos, é usado para criarmos uma variavel que armazene varios elementos do DOM em uma só variavel

class Calculator {
    constructor(previewOperacao, atualOperacao){
        this.previewOperacao = previewOperacao
        this.atualOperacao = atualOperacao
        this.atualOperacao = ""
    }
}
    
buttons.forEach((btn) => {  // forEach é uma função que percorre cada elemento da variavel. Nesse caso a função percorrerá cada botão dentro de "buttons"
                            // o forEach é basicamente "para cada" que é anunciado antes, no caso "buttons" e o btn é o elemento que será usado pra retornar o resultado

    btn.addEventListener("click", (e) => { // aqui adicionamos uma função para o "btn", o primeiro parametro é o evento desejado, nomeamos como "click" porém isso é
                                           // apenas uma string para facilitar a coesão do código, no caso o nosso EventName é "click"
                                           // já o "e" representa o evento a ser executado, FunctionToExecite, a letra "e" é apenas uma convenção de "event"
                                           // mas poderia ser qualquer letra. Esse é um conceito fixo para o AddEventListener

        let value = e.target.innerText // depois do inicio do addEventListener podemos criar diversas váriaveis para coletar alguma inforação que ocorreu no evento
                                       // no caso queremos apenas coletar o texto do botão no momento em que ele foi clicado, então criamos uma variavel para armazenar esse valor
                                       // e depois apontamos o dado que queremos coletar, usamos o "e" para referenciar o evento, target para capturar determinado dado
                                       // e o innerText para apontar qual é esse dado

        if (+value >= 0 || value === "."){ // +value faz a interpretação do texto como número, e se esse número for maior ou igual 0 ou igual a "." faça:
            console.log(value) // mostre o resultado da variavel valor
        } else {    // se não
            console.log("Op: " + value) //mostre texto + value (que só poderá ser um dos sinais + - / *)
        }
    })
})






