const alteraBgColor = ()=>{
    document.body.style.backgroundColor="#333";
}
const mudaCor = () => {
    document.body.style.backgroundColor = corEscolhida();
    function corEscolhida(){
        return "#f2f2f2";
    }
}




const btn6 = document.createElement("button");
btn6.setAttribute("id","btn6");
btn6.onclick = alteraBgColor;
btn6.innerHTML="Botão 6";
body.appendChild(btn6);

const btn7 = document.createElement("button");
btn7.setAttribute("id","btn7");
btn7.onclick = mudaCor;
btn7.innerHTML="Botão 7"
body.appendChild(btn7);