const SENHA = "anjo";

const mensagens = {
    "pecado": "O PERDÃO ESTÁ AQUI.",
    "confissao": "MARCADO ATÉ A MORTE.",
    "confissão": "MARCADO ATÉ A MORTE.",
    "mentira": "O JULGAMENTO COMEÇOU.",
    "justica": "AZRAEL",
    "justiça": "AZRAEL",
    "segredos": "A JUSTICA VIRA",
    "morte: "JUIZO FINAL",
    "31082000: "fgnpl cntbh crybf frhf crpnqbf",
    "31/08/2000: "fgnpl cntbh crybf frhf crpnqbf",
    "stacy: "profana",

};

function entrar() {

const senha = document.getElementById("senha")
.value
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g, "")
.trim();

    const mensagem = document.getElementById("mensagemSecreta");
    const erro = document.getElementById("erro");

    mensagem.innerHTML = "";
    mensagem.classList.remove("mostrar");

    erro.innerHTML = "";

    // SENHA PRINCIPAL
    if (senha === SENHA) {

        document.getElementById("login").classList.add("fade");

        setTimeout(() => {

            document.getElementById("login").style.display = "none";

            document.getElementById("revelacao").style.display = "flex";

            const img = document.getElementById("imagem");

            setTimeout(() => {

                img.style.opacity = "1";
                img.style.transform = "scale(1)";

            },200);

            escreverTexto();

        },1200);

        return;
    }

    // SENHAS SECRETAS
    if (mensagens[senha]) {

        escreverMensagem(mensagens[senha]);

        return;

    }

    // SENHA ERRADA

    erro.innerHTML = "Senha incorreta.";

    document.getElementById("senha").animate([
        {transform:"translateX(-8px)"},
        {transform:"translateX(8px)"},
        {transform:"translateX(-8px)"},
        {transform:"translateX(8px)"},
        {transform:"translateX(0px)"}
    ],{
        duration:400
    });

}

function escreverTexto(){

    const texto = "A justiça está chegando.";

    const destino = document.getElementById("texto");

    destino.innerHTML = "";

    let i = 0;

    const intervalo = setInterval(()=>{

        destino.innerHTML += texto.charAt(i);

        i++;

        if(i >= texto.length){

            clearInterval(intervalo);

        }

    },90);

}

function escreverMensagem(frase){

    const destino = document.getElementById("mensagemSecreta");

    destino.innerHTML = "";

    destino.classList.add("mostrar");

    let i = 0;

    const intervalo = setInterval(()=>{

        destino.innerHTML += frase.charAt(i);

        i++;

        if(i >= frase.length){

            clearInterval(intervalo);

        }

    },40);

}

ddocument.addEventListener("DOMContentLoaded", () => {

    document.getElementById("senha").addEventListener("keydown", function(e){

        if(e.key === "Enter"){
            entrar();
        }

    });

});

function verificarSenha(){

    let senha = document.getElementById("senha").value;
    let imagem = document.getElementById("imagemSecreta");
    let mensagem = document.getElementById("mensagem");


    if(senha === "31/08/2000"){

        imagem.classList.add("aparecer");

        mensagem.innerHTML = "tudo tem um preço";

    } else {

        mensagem.innerHTML = "Senha incorreta.";

    }

}