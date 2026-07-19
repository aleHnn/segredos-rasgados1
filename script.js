const SENHA = "anjo";

function entrar() {

    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

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