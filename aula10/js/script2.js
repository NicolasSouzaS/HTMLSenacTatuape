let arrCidades = [
    `Salvador`,
    `Leme`,
    `Belo Horizonte`,
    `São Paulo`,
    `Londrina`,
    `Rio de Janeiro`,
    `Curitiba`,
    `Recife`,
    `Holambra`,
    `Varzia Grande Paulista`
];

// for, estrutura tradicional
// for(let i = 0; i < arrCidades.length; i++){
//     console.log(`${i+1}ª Cidade ${arrCidades[i]}`)
// }

// forEach, estrutura que pertence ao array
// arrCidades.forEach(function(v,i){
//     console.log(`${i+1}ª Cidade ${v}`);
// });

// map, estrutura que pertence ao array
// arrCidades.map(function(v,i){
//     console.log(v)
// })

const produto1 = {
    id:50,
    nome:"Mouse",
    preco:50.0
};

const produto2 = {
    id:51,
    nome:"Teclado",
    preco:150
}

const listaProdutos = [
    produto1,
    produto2
]

listaProdutos.map((v)=>{
    console.log(`Nome: ${v.nome}, Preço: ${v.preco}.`)
})