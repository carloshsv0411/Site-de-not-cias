function mostrarNoticia() {

    window.location.href = "noticia.html";

}

function mostrarMensagem() {

    alert("Em breve você poderá ler a notícia completa.");

}

const formulario =
    document.getElementById("formulario");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome =
            document.getElementById("nome").value;

        const mensagemSucesso =
            document.getElementById("mensagem-sucesso");


        mensagemSucesso.textContent =
            "Mensagem enviada com sucesso " + nome + "!";

    });

}