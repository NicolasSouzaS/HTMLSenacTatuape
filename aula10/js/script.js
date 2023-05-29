// Referência ao body usando comando document.body
const body = document.body;

const div1 = document.createElement("div");
const btn1 = document.createElement("button");

div1.setAttribute("id","resultado");
btn1.setAttribute("id","btn1");
btn1.innerHTML="Executar";

btn1.onclick = () => {
  let n1;
  let n2;

  let soma = 0;
  let sub = 0;
  let mult = 0;
  let div = 0;
  let rest = 0;

  n1 = prompt("Digite um valor");
  n2 = prompt("Digite um outro valor");
  
  // Iremos converter as variaveis n1 e n2 para numeros
  n1 = parseInt(n1);
  n2 = parseInt(n2);

  soma = n1 + n2;
  sub = n1 - n2;
  mult = n1 * n2;
  div = n1 / n2;
  rest = n1 % n2;

  // Pegar um elemento HTML por ID
  document.getElementById("resultado").innerHTML="O resultado da soma é:" + soma+"<br>";
  document.getElementById("resultado").innerHTML+='O resultado da subtração é: '+sub+'<br>';
  document.getElementById("resultado").innerHTML+='O resultado é "mais ou menos" '+mult+'<br>';
  document.getElementById("resultado").innerHTML+=`O resultado da divisão é: ${div}<br>`;
  document.getElementById("resultado").innerHTML+=`O resultado do resto é ${rest}<br>`;
}

const btn2 = document.createElement("button");
btn2.setAttribute("id","btn2");
btn2.innerHTML="Função de CallBack";


body.appendChild(btn1);
body.appendChild(btn2);
body.appendChild(div1);


btn2.onclick = () => {
  // exibir("Texto teste");
  // calcPer(500,6);

  // Utilizando a função de callback
  // calPercent(600,5,mostrar);

  let n =[10,30,5,80,12];

  // somaPares(n,n.length,apresentar,mostrar);

  maiorValor(n,n.length,fx);
}


// Área de funções
function exibir(dados){
  document.getElementById("resultado").innerHTML = dados;
}

function calcPer(preco,perc){
  let rs = preco * perc /100;
  exibir(rs);
}

// Função de callback
/*
Com a função de callback, uma função é passada por parámetro para um outra
função e assim a função que tem o callback como parámetro executará a sua parte
quando o callback executar a sua
*/

function calPercent(preco,perc,func){
  resultado = preco * perc /100;
  func(resultado);
}

function mostrar(valor){
  document.getElementById("resultado").innerHTML=`<strong>O resultado é ${valor}</strong>`;
}

function somaPares(arrNum,arrTm,fun,fun2){
  let rs = 0;
  for(let i = 0; i < arrTm; i++){
    console.log(fun(arrNum[i]));
    rs += arrNum[i];
  }
  fun2(rs);
}

function apresentar(v){
  return `Recebemos o valor ${v} para calcular`;
}

function maiorValor(arrNum,arrTm,fx){
  let m = arrNum[0];
  for(let i = 1; i < arrTm; i++){
    if(arrNum[i] > m){
      m = arrNum[i];
    }
  }
  console.log(fx(arrTm,m));
}

function fx(tm,rs){

  return `O tamanho do array é ${tm} e o maior valor é ${rs}`;

}