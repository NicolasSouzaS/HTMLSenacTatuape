const somaValores = function(){
    let v1 = prompt("Digite um valor")
    let v2 = prompt("Digite outro valor que queira somar com o primeiro.")
    
    v1 = parseInt(v1);
    v2 = parseInt(v2);

    console.log(v1 + v2);
    alert(v1 + v2);
}


const media = function(arrayNumerico, tamanhoArray){
    let rs = 0;
    for(let i = 0 ; i < tamanhoArray ; i++){
        rs += arrayNumerico[i];

    }

    return rs/tamanhoArray;
}



//Referenciar o body da página
const body = document.body;

//Vamos criar um controle HTML
//usando JavaScript, este controle
//só existirá em tempo de execução
//ou sejá, somente quando a página estiver
//executando || rodando, usaremos o comando
//createElement
const btn4 = document.createElement("button");

//Adicionar o atributo id ao botão criado
btn4.setAttribute("id","btn4");
btn4.onclick = somaValores;

//Adicionar um texto ao botão
btn4.innerHTML="Botão 4"

//Adicionar o botão4 ao corpo da página(HTML)
//ou sejá, no body utilizaremos o comando append(adiciona)
body.appendChild(btn4);


const btn5 = document.createElement("button");

//Adicionar o atributo id ao botão criado
btn5.setAttribute("id","btn5");


let ar = [10,20,30,5,9,12];

btn5.onclick = function(){
   
    alert(media(ar, ar.length));
}
//Adicionar um texto ao botão
btn5.innerHTML="Botão 5"

//Adicionar o botão4 ao corpo da página(HTML)
//ou sejá, no body utilizaremos o comando append(adiciona)
body.appendChild(btn4);
body.appendChild(btn5);