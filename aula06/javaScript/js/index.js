/*
A função abaixo é chamada por um evento que está
na página index.html. O evento foi adicionado a um
botão com o comando onclick, ou seja, quando o
usuário clicar no botão será chamada a função
mensagem.
*/

let valor1 = 0;
let valor2 = 0;
let resultado = 0;
let operador = "";


function mensagem(){
    var nome = prompt("Digite o seu nome");
    document.getElementsByTagName("p")[0].innerHTML=nome;
}


const body = document.body;
body.onload = apagarDisplay;

const display = document.getElementsByTagName("input")[0];




/**
 * Quando a página for carregada ela irá chamar
 * a função apagarDisplay, pois a função apaga a
 * tela e adiciona o valor 0(zero).
 * O evento utilizado será onload(ao carregar a página)
 * aplicado no body(document.body)
 */

function apagarDisplay(){
   display.value="0";

}

function adicionar0(){
    if(display.value=="0"){
        display.value="0";
    }
    else{
        display.value+="0";
    }
}

function adicionar1(){
    if(display.value=="0"){
        display.value="1";
    }
    else{
        display.value+="1";
    }
}

function adicionar2(){
    if(display.value=="0"){
        display.value="2";
    }
    else{
        display.value+="2";
    }
}

function adicionar3(){
    if(display.value=="0"){
        display.value="3";
    }
    else{
        display.value+="3";
    }
}

function adicionar4(){
    if(display.value=="0"){
        display.value="4";
    }
    else{
        display.value+="4";
    }
}

function adicionar5(){
    if(display.value=="0"){
        display.value="5";
    }
    else{
        display.value+="5";
    }
}

function adicionar6(){
    if(display.value=="0"){
        display.value="6";
    }
    else{
        display.value+="6";
    }
}

function adicionar7(){
    if(display.value=="0"){
        display.value="7";
    }
    else{
        display.value+="7";
    }
}

function adicionar8(){
    if(display.value=="0"){
        display.value="8";
    }
    else{
        display.value+="8";
    }
}

function adicionar9(){
    if(display.value=="0"){
        display.value="9";
    }
    else{
        display.value+="9";
    }
}

function adicionarPonto(){

    /**
     * Para o botão estamos verificando se o ponto
     * já foi adicionado caso isso já tenha acontecido,
     * o ponto não será mais acrescido. Mas se o ponto
     * não foi adicionado, então será acrescentado ao
     * display. Para verificar a exiscentecia do ponto
     * no display. Quando o indexOf retorna -1 é porque não
     * foi localizado e, assim nós adicionamos o ponto.
     */

    if(display.value.indexOf(".")==-1){
        display.value+="."
    }
}

function soma(){
    valor1 = parseFloat(display.value);
    operador = "+";
    apagarDisplay();
}

function sub(){
    valor1 = parseFloat(display.value);
    operador = "-";
    apagarDisplay();
}

function mult(){
    valor1 = parseFloat(display.value);
    operador = "*";
    apagarDisplay();
}

function divi(){
    valor1 = parseFloat(display.value);
    operador = "/";
    apagarDisplay();
}

function porc(){
    valor1 = parseFloat(display.value)
    operador = "%"
    apagarDisplay()
}

function raiz(){
    valor1 = parseFloat(display.value)
    resultado = Math.sqrt(valor1);
    display.value = resultado;
}

function igual(){
    if(operador == "+"){
        resultado = valor1 + parseFloat(display.value);
        display.value = resultado;
        
    }
    else if(operador == "-"){
        resultado = valor1 - parseFloat(display.value);
        display.value = resultado;
    }
    else if(operador == "*"){
        resultado = valor1 * parseFloat(display.value);
        display.value = resultado;
    }
    else if(operador == "/"){
        resultado = valor1 / parseFloat(display.value);
        display.value = resultado;
    }
    
}