// Fazer referência aos controles html do formulário
const btn = document.getElementById("btnLogin");
const txtuser = document.getElementById("txtusuario");
const txtpass = document.getElementById("txtsenha");
let autenticado;
let token;

btn.onclick= ()=>{
    // Validação dos campos usuario e senha
    if(txtusuario.value.trim()=="" || txtpass.value.trim()==""){
        return alert("Nome de usuário ou senha obrigatório.");
    }
    else{
        /*
        Vamos usar o comando fetch(buscar) para fazer uma requisição a nossa
        API e, realizar o login. Passaremos o nome de usuário e senha.
        */
       fetch("http://127.0.0.1:4000/users/login",{
        method:"POST",
        headers:{
            "accept":"application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify({
            nomeUsuario:txtusuario.value,
            senha:txtsenha.value
        })

       }).then((response)=>response.json()).then((dado)=>{
        console.log(dado);
        if(dado.output=="Autenticado"){
            autenticado = true;
            token = dado.token;
            txtusuario.value="";
            txtsenha.value="";
        }
        else{
            return alert("Usuário ou senha incorreto. Tente novamente")
            txtusuario.value="";
            txtsenha.value="";
        }
       })
       
       
       .catch((error)=>console.error(`Não foi possível requisitar
       a API -> ${error}`));
    }
}