let previewOperacaoText = document.getElementById('operacao-preview')
let atualOperacaoText = document.getElementById('operacao-atual')
// declarando variavel pelo ID

let buttons = document.querySelectorAll("#botoes-container button")
// declarando variavel através de todo elemento que se identifica como "button" dentro da div #botoes-container, por isso usamos o querySelectorAll
// o getElementById seleciona apenas um elemento especifico que se indetificar com o ID
// o querySelector tem a mesma funcionalidade do getElementById, porém ele trás mais possiblidades de requisitarmos o elemento como através da classe por exemplo.
// o querySelectorAll serve para capturar uma lista de elementos, é usado para criarmos uma variavel que armazene varios elementos do DOM em uma só variavel

class Calculator { // criando uma classe. Classe é um modelo para objetos, objetos pertencentes a uma classe herdarão seus atributos e comportamentos
                   // podemos criar uma classe chamada "Honda", e criar atributos e comportamentos, podemos criar um objeto chamado "Carro"
                   // sendo esse da classe Honda, logo ele herdará as propriedades e funções pertinentes a classe
                   // nossa classe Calculator irá receber os dois elementos do HTML que mostram a operação atual e o preview, para usarmos posteriormente para exibir os valores dos botões acionados

    constructor(previewOperacaoText, atualOperacaoText){ /* constructor é um método para classes (um método é uma função que só se aplica dentro da classe e não é reutilizavel fora do bloco)
                                                 ele serve para estabelecer parametros que devem ser informados pelo objeto quando ele participar da classe, esses parametros serão usados para operar
                                                 nas requisições dentro do constructor

                                                class Cachorro{
                                                    Constructor (latido, tamanho){
                                                        this.latido = latido
                                                        this.tamanho = tamanho
                                                    }
                                                 }

                                                 let Poodle = new Cachorro(médio, pequeno)
                                                 console.log(Poodle.tamanho)

                                                 nesse caso ele rertornará "pequeno" */
                                                 // o construtor serve para atribuir valores quando um objeto é criado a partir da classe em questão
                                                 
        this.previewOperacaoText = previewOperacaoText // armezanando valor da variavel, em uma outra variavel que armazena o texto
        this.atualOperacaoText = atualOperacaoText     // armezanando valor da variavel, em uma outra variavel que armazena o texto
        this.atualOperacao = ""                 // faz a operação atual sempre começar como uma string vazia
    }

    addDigit(digit){ // o método add DIgit é acionado quando um número é passado para ele, no caso ele está usando o valor do "atualOperacao"
        this.atualOperacao  = digit // não entendi de onde veio esse "atualOperacao", já que não declarei a variavel em nenhum lugar,mas ela recebe o digit
        this.updateScreen() // feito isso, chama-se a função de updateScreen
    }

    updateScreen(){ //inicia função
        this.atualOperacaoText.innerText += this.atualOperacao // ao atualizar, ele faz com que o valor "atualOperacao" se concatene ao próximo valor enviado ao "atualOperacao"
    }

}

let calculo =  new Calculator(previewOperacaoText, atualOperacaoText)
    
buttons.forEach((btn) => {  // forEach é uma função que percorre cada elemento da variavel. Nesse caso a função percorrerá cada botão dentro de "buttons"
                            // o forEach é basicamente "para cada" que é anunciado antes, no caso "buttons" e o btn é o elemento que será usado pra retornar o resultado

    btn.addEventListener("click", (e) => { // aqui adicionamos uma função para o "btn", o primeiro parametro é o evento desejado, nomeamos como "click"
                                           // apesar de ser uma string, o parametro deve ser digitado corretamente para apontar o evento que desejamos capturar, como por exemplo:
                                           // keydown, keyup, mousedown, submit, input...
                                           // já o "e" representa o evento a ser executado, FunctionToExecite, a letra "e" é apenas uma convenção de "event"
                                           // mas poderia ser qualquer letra. Esse é um conceito fixo para o AddEventListener

        let value = e.target.innerText // depois do inicio do addEventListener podemos criar diversas váriaveis para coletar alguma informação que ocorreu no evento
                                       // no caso queremos apenas coletar o texto do botão no momento em que ele foi clicado, então criamos uma variavel para armazenar esse valor
                                       // e depois apontamos o dado que queremos coletar, usamos o "e" para referenciar o evento, target para capturar o elemento que ocorreu dentro do evento
                                       // no caso, o botão que foi clicado dentro desse evento,e o innerText apenas para orientar que o dado solicitado é o texto

        if (+value >= 0 || value === "."){ // +value faz a interpretação do texto como número, e se esse número for maior ou igual 0 ou igual a "." faça:
            calculo.addDigit(value) // mostre o resultado da variavel valor
        } else {    // se não
            console.log("Op: " + value) //mostre texto + value (que só poderá ser um dos sinais + - / *)
        }
    })
})






