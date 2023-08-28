let valorDisplay = ''
let valoratual = document.getElementById('display')

function insert(numero){
valorDisplay += numero
document.getElementById('display').value = valorDisplay
}

function limpar() {
    valorDisplay = '';
    document.getElementById('display').value = valorDisplay
}

function calcular(){
    if (valoratual.value == ''){
        document.getElementById('display').value = 'Erro';
        valorDisplay = '';
        
    }
    else{
    try {
        let resultado = FazerConta(valorDisplay);
        document.getElementById('display').value = resultado;
        valorDisplay = '';
    } 

    catch (error) {
        document.getElementById('display').value = 'Erro';
        valorDisplay = '';
        
    }
}
}

function FazerConta(expressao) {
    return new Function('return ' + expressao)();
}