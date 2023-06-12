// Fazer referência aos controles html do formulário
const btn = document.getElementById("btnLogin");
const txtuser = document.getElementById("txtusuario");
const txtpass = document.getElementById("txtsenha");
let autenticado;
let token;
let key;

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
            // Mudar de tela
            window.location.href=`list.html?key=${token}`;
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

document.getElementById("register").onclick = ()=>{
    document.getElementById("shadow").style.zIndex="100";
    document.getElementById("shadow").style.opacity="1";
}

document.getElementById("fechar").onclick = () =>{
    document.getElementById("shadow").style.zIndex="-80";
    document.getElementById("shadow").style.opacity="0";
}

// Script para cadastrar usuário ao banco de dados
// --------------------------------------------------

// Fazendo a instancia dos botões para o JavaScript
const btncad = document.getElementById("btncadastrar");
const txtUser = document.getElementById("txtUser");
const txtPass = document.getElementById("txtPass");
const txtemail = document.getElementById("txtemail");
const txtfoto = document.getElementById("txtfoto");

btncad.onclick = ()=> {
    if(txtUser.value.trim()=="" || txtPass.value.trim()=="" || txtemail.value.trim()==""){
        return alert ("Todos os campos devem ser preenchidos. Por favor verifique os campos.")
    }
    else{
        fetch("http://127.0.0.1:4000/users/insert",{
            method:"POST",
            headers:{
                "accept":"application/json",
                "content-type":"application/json"
            },
            body:JSON.stringify({
                nomeUsuario:txtUser.value,
                senha:txtPass.value,
                email:txtemail.value,
                foto:txtfoto.value
            })
        }).then((response)=>response.json())
            .then((result)=>{
                if(result.output=="Inserted"){
                    alert("Usuário cadastrado com sucésso. Bem-Vindo !");

                    txtUser.value="";
                    txtPass.value="";
                    txtemail.value="";
                    txtfoto.value="";

                    document.getElementById("shadow").style.zIndex="-80";
                    document.getElementById("shadow").style.opacity="0";
                }
                else{
                    alert("Não foi possível cadastrar. Tente novamente !");
                    txtPass.value="";
                }
            })
            .catch((error)=>console.error(`Erro ao cadastrar -> ${error}`));
        }
}


function carregarDados(){

key = window.location.search.substring(5,window.location.search.length);

const estrutura = document.getElementById("estrutura");

fetch("http://127.0.0.1:4000/users/list")
.then((response)=>response.json())
.then((result)=>{
    result.data.map((item,index)=>{
        let divUser = document.createElement("div");
        divUser.setAttribute("class","div_user");
        divUser.innerHTML = `<img src="img/avatar.png">
        <h2>${item.nomeUsuario}</h2>
        <h3>${item.email}</h3>
        <a href="#" onclick="editar('${item.idusuario}','${item.nomeUsuario}','${item.email}','${item.foto}')">
            <img src="img/botao-editar.png">
        </a>
        `;
        estrutura.appendChild(divUser);
    })
}).catch((error)=>console.log(`Erro ao executar a API -> ${error}`));
};

function editar(id,usuario, email,foto){
    
    // Fazer uma referência ao body da página HTML
    const body = document.body;
    const divShadow = document.createElement("div");
    const divWhite = document.createElement("div");
    const form = document.createElement("form");
    const inputId = document.createElement("input");
    const inputUser = document.createElement("input");
    const inputPass = document.createElement("input");
    const inputConfirm = document.createElement("input");
    const inputEmail = document.createElement("input");
    const inputFile = document.createElement("input");
    const inputSub = document.createElement("input");

    // Aplicando atributos para os elementos
    divShadow.setAttribute("id","divShadow");
    divWhite.setAttribute("id","divWhite");
    // Atributo para não enviar o formulário. O envio será feito
    // via JavaScript.
    form.setAttribute("onsubmit","return false;")

    // Aplicando atributos para o Id, os atributos são:
    // type, placeholder, disabled
    inputId.setAttribute("type","text");
    inputId.setAttribute("placeholder",`Id ${id}`);
    inputId.setAttribute("disabled","true");


    // Aplicando atributos ao user, os atributos são: type, placeholder
    // disabled
    inputUser.setAttribute("type","text");
    inputUser.setAttribute("placeholder",`Usuário: ${usuario}`);
    inputUser.setAttribute("disabled","true");

    // Aplicando atributos a pass e confirm
    inputPass.setAttribute("type","password");
    inputPass.setAttribute("placeholder","Senha");

    inputConfirm.setAttribute("type","password");
    inputConfirm.setAttribute("placeholder","Confirme a senha");

    // Atributos para email
    inputEmail.setAttribute("type","email");
    inputEmail.setAttribute("placeholder",`${email}`);

    // Atributos para file
    inputFile.setAttribute("type","file");
    inputFile.setAttribute("value",`${foto}`);

    inputSub.setAttribute("type","submit");
    inputSub.setAttribute("value","Atualizar");


    inputSub.onclick = ()=>{
        if(inputConfirm.value != inputPass.value){
            return alert("Senha de confirmação diferente da senha digitada")
        }
        else{
            fetch(`http://127.0.0.1:4000/users/update/${id}`,{
                method:`PUT`,
                headers:{
                    "accept":"application/json",
                    "content-type":"application/json",
                    "token":key
                },
                body:JSON.stringify({
                    senha:inputPass.value,
                    email:inputEmail.value,
                    foto:inputFile.value
                })
            })
        }
    }

    form.appendChild(inputId);
    form.appendChild(inputUser);
    form.appendChild(inputPass);
    form.appendChild(inputConfirm);
    form.appendChild(inputEmail);
    form.appendChild(inputFile);
    form.appendChild(inputSub);
    divWhite.appendChild(form);
    divShadow.appendChild(divWhite);
    body.appendChild(divShadow);
}