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

                                                          class Carro{

                                                          constructor (marca, modelo){

                                                          this.marca = marca
                                                          this.modelo = modelo
                                                          this.ano = 2015

                                                           }

                                                          mostrarAtributos(){
                                                          return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`
                                                             }
                                                          }
                                                
                                                          let Sedan = new Carro(Honda, Civic)
                                                          console.log(Sedan.modelo) --- Mostra o modelo do carro
                                                          console.log(Sedan.mostrarAtributos()) --- Mostra todos atributos do objeto
                                                          */
                                                 
                                                         // o construtor serve para atribuir valores quando um objeto é criado a partir da classe em questão
                                                 
        this.previewOperacaoText = previewOperacaoText // armezanando valor da variavel, em uma outra variavel que armazena o texto
        this.atualOperacaoText = atualOperacaoText     // armezanando valor da variavel, em uma outra variavel que armazena o texto
        this.atualOperacao = ""                       // faz a operação atual sempre começar como uma string vazia
    }

    addDigit(digit){                 // o método add Digit é acionado quando um número é passado para ele, no caso ele está usando o valor do "atualOperacao"
        console.log(digit)
        if (digit === "." && this.atualOperacaoText.innerText.includes(".")){   // se o valor "digit" for "." e também no valor atual da operação já incluir um "." faça:
            return                   // se as condições forem atendidads, recebemos um "return" vazio que fará o método addDigit parar imediatamente
        }
                 
        this.atualOperacao  = digit  // faz com que a variavel que incia vazia receba um valor, no caso digit, que é o parametro da função, esse valor só sera obtido quando
                                     // um objeto acionar essa função passando o valor do parametro

        this.updateScreen()          // feito isso, chama-se a função de updateScreen
    }

    cleanAll(){                      // criando método para limpar tanto a div atual e a div do preview
        this.previewOperacaoText.innerText = ""
        this.atualOperacaoText.innerText = ""
    }

    cleanAtual(){                    // criando método para limpar a div atual
        this.atualOperacaoText.innerText = ""
    }

    removeDigit() {                  // método para remover o ultimo digito
        this.atualOperacaoText.innerText = this.atualOperacaoText.innerText.slice(0, -1) // o campo atual recebe o campo atual menos o ultimo campo toda vez que o método é ativado
    }                                                                                    // slice é um método que pode ser aplicado a strings e arrays. Ele permite extrair uma
                                                                                         // parte específica de uma string ou array, criando uma nova string ou array com os elementos selecionados.
                                                                                         /*
                                                                                         let texto = "Exemplo de texto";
                                                                                         let parteExtraida = texto.slice(8, 11)
                                                                                         console.log(parteExtraida) = "Exemplo de " 
                                                                                         as posições indicadas no slice foram extraidos e não foram para a nova variavel
                                                                                         */
                                                                                        
    processEqual(){

        if (previewOperacaoText.innerText == '' && atualOperacaoText.innerText == ''){
            return
            }

            if (atualOperacaoText.innerText == '') {
                atualOperacaoText.innerText == '0'
            }

        if (previewOperacaoText.innerText == '' && atualOperacaoText.innerText !== ''){
            this.atualOperacaoText.innerText = atualOperacaoText.innerText
        }

        let preview = this.previewOperacaoText.innerText
        let atual = this.atualOperacaoText.innerText
        let valorAtual = parseFloat(atual)
        let valorPreview = parseFloat(preview)


        switch (true) {

              case previewOperacaoText.innerText.includes("+"):
              this.atualOperacaoText.innerText = valorAtual + valorPreview;
              break

              case previewOperacaoText.innerText.includes("-"):
              this.atualOperacaoText.innerText = valorPreview - valorAtual;
              break

              case previewOperacaoText.innerText.includes("*"):
              this.atualOperacaoText.innerText = valorAtual * valorPreview;
              break

              case previewOperacaoText.innerText.includes("/"):
              if (valorAtual !== 0) {
                this.atualOperacaoText.innerText = valorPreview / valorAtual;
              } else {
                this.atualOperacaoText.innerText = '0';
              }
              break

              default:
                console.log("ERRO")
              break
          }
        
          previewOperacaoText.innerText = '';
          
        }

    identificaOperacao(operacao){


    // Preciso que: 
    // Quando um operador for acionado, já havendo um operador no preview, primeiro seja feito o calculo entre o número que está no preview e o número que está na atual, e o resultado desse calculo vá para o preview junto com o novo operador teclado
    // Quando houver um número e um operador no preview como "1+" e o campo atual estjea vazio, caso o usuário aperte em outro operador como "-" o operador do preview seja substituido, mas preservando o número que já estava no preview
    // Em caso do usuário digitar por exemplo "0+ =" seja acionado corretamente a função de calculo processEqual() pois mesmo sendo uma conta ilógica, ela adicionará valor para o campo vazio (no caso 0)

        switch (operacao) {
            case "+":
            case "-":
            case "*":
            case "/":
                
                if  (atualOperacaoText.innerText == ''){
                    previewOperacaoText.innerText = '0'
                }

                    this.previewOperacaoText.innerText += this.atualOperacaoText.innerText + operacao;
                    this.atualOperacaoText.innerText = ""; // Limpa o valor atual
                    this.atualOperacao = ""; // Limpa a variável que armazena o valor atual
                    this.updateScreen(); // Atualiza a tela

            break

            case "C":
                this.cleanAll()
            break

            case "CE":
                this.cleanAtual()
            break

            case "DEL":
                this.removeDigit()
            break
            
            case "=":
                this.processEqual()
            break

            default:
            return
        }
    }


    updateScreen(){
        this.atualOperacaoText.innerText += this.atualOperacao;
    }   
}

let calculo =  new Calculator(previewOperacaoText, atualOperacaoText)
    
buttons.forEach((btn) => {  // forEach é uma função que percorre cada elemento da variavel. Nesse caso a função percorrerá cada botão dentro de "buttons"
                            // o forEach é basicamente "para cada" que é anunciado antes, no caso "buttons", e o "btn" é o elemento que será usado para capturar o valor do botão

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
            calculo.addDigit(value)        // mostre o resultado da variavel valor
        } else {                           // se não
            console.log("Op: " + value)   // mostre texto + value (que só poderá ser um dos sinais + - / *)
            calculo.identificaOperacao(value)
        }
    })
})






