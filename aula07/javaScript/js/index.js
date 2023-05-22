//Diferença entre const, var e let
//Declaração de variável com var e let
//Declaração de constantes com const. Aqui o valor nunca será alterado
//A declaração com var tem escopo(visibilidade) fora de estrutura
//Declarar com let tem escopo(visibilidade) local, ou sejá, dentro da estrutura
var nome = "Helena";
let sobrenome = "Santos";

console.log(nome,sobrenome);


if(nome=="Helena"){
    var dados="É uma pessoa de idade 35 anos";
    let mais = "E também trabalha com vendas";

}

console.log(dados);

const texto = "Mensagem";


console.log("O valor da constante é " +texto);

console.log(texto.toUpperCase());
