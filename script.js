const SENHA = "anjo";

function entrar(){

    const senha = document.getElementById("senha").value.toLowerCase();

    const mensagem = document.getElementById("mensagemSecreta");

    // A senha principal continua levando à revelação
    if(senha === "anjo"){

        // aqui fica o seu código atual da revelação
        revelar();

        return;
    }

    // Senhas especiais
    if(mensagens[senha]){

        mensagem.innerHTML = mensagens[senha];
        mensagem.classList.add("mostrar");

        return;
    }

    // Senha incorreta
    mensagem.innerHTML = "";
    mensagem.classList.remove("mostrar");

    document.getElementById("erro").innerHTML = "Senha incorreta.";

}

};
    if (senha === SENHA) {

        document.getElementById("login").classList.add("fade");

        setTimeout(() => {

            document.getElementById("login").style.display = "none";

            const tela = document.getElementById("revelacao");

            tela.style.display = "flex";

            const img = document.getElementById("imagem");

            setTimeout(() => {

                img.style.opacity = "1";
                img.style.transform = "scale(1)";

            },200);

            escreverTexto();

        },1200);

    }

    else{

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

}

function escreverTexto(){

    const texto = "A justiça está chegando.";

    let i = 0;

    const destino = document.getElementById("texto");

    destino.innerHTML = "";

    const intervalo = setInterval(()=>{

        destino.innerHTML += texto.charAt(i);

        i++;

        if(i >= texto.length){

            clearInterval(intervalo);

        }

    },90);

}

document.getElementById("senha").addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        entrar();

    }

});

const mensagens = {
    "pecado": "O PERDÃO ESTA AQUI.",

    "confissao": "MARCADO ATE A MORTE.",

};