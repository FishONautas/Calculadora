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
                                                                                        
    processEqual(){ // Método dentro da classe usada para fazer o calculo

        let preview = this.previewOperacaoText.innerText // criando uma variavel para armazenar o valor atual que estiver no preview
        let atual = this.atualOperacaoText.innerText     // criando uma variavel para armazenar valor atual que estiver no campo atual
        let valorAtual = parseFloat(atual)               // criando uma variavel para armazenar valor como número, agora essa variavel não armazena uma string e sim um number do valor do campo atual
        let valorPreview = parseFloat(preview)           // criando uma variavel para armazenar valor como número, agora essa variavel não armazena uma string e sim um number do valor do preview

        
        if (previewOperacaoText.innerText == '' && atualOperacaoText.innerText == ''){  // tratando possiveis exceções para evitar bugs
            return
            }

        if (previewOperacaoText.innerText == '' && atualOperacaoText.innerText !== ''){ // tratando possiveis exceções para evitar bugs
            this.atualOperacaoText.innerText = atualOperacaoText.innerText
        }

        if (atualOperacaoText.innerText == '') {                                        // tratando possiveis exceções para evitar bugs
            valorAtual = 0 
        }


        switch (true) {     // usando switch para testar condições positivas para cada botão

              case previewOperacaoText.innerText.includes("+"):     // caso o preview incluir "+" nas strings faça:
                                                                    // lembrando que a função .includes só funcionará como desejado caso a variavel anunciada armazene especificamente uma string ou number
              this.atualOperacaoText.innerText = valorAtual + valorPreview;
              break

              case previewOperacaoText.innerText.includes("-"):     // caso o preview incluir "-" nas strings faça:
              this.atualOperacaoText.innerText = valorPreview - valorAtual;
              break

              case previewOperacaoText.innerText.includes("*"):     // caso o preview incluir "/" nas strings faça:
              this.atualOperacaoText.innerText = valorAtual * valorPreview;
              break

              case previewOperacaoText.innerText.includes("/"):     // caso o preview incluir "*" nas strings faça:
              if (valorAtual !== 0) { // se torne o valorAtual for zero faça:
                this.atualOperacaoText.innerText = valorPreview / valorAtual;
              } else { //se não, faça:
                this.atualOperacaoText.innerText = '0';
              }
              break

              default:
                console.log("ERRO") // caso nenhuma das condições sejam atendidas mostre erro no log
              break
          }
        
          previewOperacaoText.innerText = ''; // ao fim, o valor atual é limpo
          
        }

    identificaOperacao(operacao){ // método para os operadores, será aplicado quando um operador for acionado
        
        let operadores = ["+", "-", "*", "/"] // operadores armazenando strings que representam os operadores
        let verificar = this.previewOperacaoText.innerText // verificar armazena o valor atual do preview quando o método for ativado
        let verificarAtual = this.atualOperacaoText.innerText // armazena o valor atual do campo atual quando o método for ativado
        let numeros = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] // variavel para armazenar os números

        switch (operacao) { //switch testa diversas possibilidades
            case "+": // caso o parametro do identificaOperacao for + - * ou / faça:
            case "-":
            case "*":
            case "/": // sendo o parametro um dos caracteres acima, verifique SE:
                
            if  (operadores.some(operador => verificar.includes(operador)) && atualOperacaoText.innerText === ''){ // se algum elemento do array "operadores" está incluso na string verificar e o campo atual estiver vazio faça:
                // some é uma função de array, ela verifica se algum elemento do array atende a uma condição, ela retorna true se pelo menos um elemento satisfazer a condição, caso contrario retorna false
                // no caso, ele está anunciando, verifique se é verdadeiro o que está entre os parenteses para o array "operadores". Dentro do parenteses testamos se para cada elemento operador no array operadores,
                // a função verifica se a string verificar contém esse operador usando o método .includes(). Se pelo menos um desses elementos em operadores estiver presente na string verificar, a função .some() retornará true.
                // no caso, a palavra "operador" é o parametro da função, e nesse caso poderia ter qualquer nome, ela representa cada elemento do array que será testado, e retornará o positivo ou não.
                // em suma estamos testando se o conteudo da variavel verificar, no caso uma string, se encontra dentro de algum dos elementos do array "operadores", no caso, se no preview tem algum dos caracteres "+ - / *"

                console.log("altere o operador")
                let alteraOperador = previewOperacaoText.innerText.slice(0,-1) // criando uma variavel que armazena o conteudo em texto do preview, com exeção do ultimo caracter
                this.previewOperacaoText.innerText = alteraOperador // o preview recebe o valor da variavel alteraOperador, no caso ela mesma, menos o ultimo caracter, fazemos isso para poder dar a possibilidade de alterar o operador quando necessário
              }

            if (operadores.some(operador => verificar.includes(operador)) && numeros.some(numero => verificarAtual.includes(numero))) { // se tiver um operador no preview e tiver um numero no no atual, faça:
                console.log("já há um operador no preview, faça o calculo e concatene o resultado ao novo operador no preview")
                this.processEqual() // caso tenha um operador e um número no atual, ative a função processEqual, mas não entendi como o resultado vai para o preview junto ao novo operador
              }
                
            if  (atualOperacaoText.innerText == '' && previewOperacaoText.innerText == '' && operacao !== "-"){ // se os requisitos forem cumpridos
                    previewOperacaoText.innerText = '0' + operacao // mostre no preview 0 + operador
                }

            if (atualOperacaoText.innerText == '' && previewOperacaoText.innerText == '' && operacao === "-"){ // se os requisitos forem cumrpidos
                this.atualOperacaoText.innerText = operacao // o campo atual mostra o operador
            }

            else { // se nenhum If for verdadeiro siga o que está abaixo quando um operador for digitado

                    this.previewOperacaoText.innerText += this.atualOperacaoText.innerText + operacao // preview recebe o número que estiver no campo atual junto ao operador teclado
                    this.atualOperacaoText.innerText = "" // Limpa o valor atual
                    this.atualOperacao = "" // Limpa a variável que armazena o valor atual
                    this.updateScreen() // Atualiza a tela
                }

            break // se o case for verdadeiro, faça o conteudo e pare, siga para o proximo case caso haja
            default: // se nenhum case for satisfeito faça:
            return // return vazio, não faça nada
        }
    }

        acoesCalculadora(acoes){ // método para algumas teclas que não são números nem operadores
        switch (acoes){ // switch para testar as afirmações
            
            case "C": // caso o parametro da função seja equivalente a string C faça:
                this.cleanAll() // limpe tudo, função previamente criada dentro da classe
            break // feito isso, pare e passe para o próximo case

            case "CE": // a lógica permanesse a mesma para o resto dos casos
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


    updateScreen(){ // método para atualizar tela, quando ela for chamada, faça:
        this.atualOperacaoText.innerText += this.atualOperacao; // a tela atual recebe concatenado o valor da atual operação, ou seja, o campo valor atual sempre vai receber e concatenar o próximo valor, isso vai ser usado quando 
                                                                // um número for digitado para aparecer na tela atual
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
            calculo.addDigit(value)        // mande o valor como parametro para a função addDigit
        } else if (value === "+" || value === "-" || value === "*" || value === "/") {     // se não, mas (condição) for verdadeiro, faça:
            console.log("Op: " + value)   // mostre o valor no console log
            calculo.identificaOperacao(value) // mande o valor como parametro para a função identificaOperacao
        }
        else{
            console.log("Ação:" + value)
            calculo.acoesCalculadora(value) // mande o valor como parametro para a função acoesCalculadora
        }
    })
})






