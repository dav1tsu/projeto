



document.addEventListener("DOMContentLoaded", function () {
    const idade = document.getElementById("idade");
    botao = document.getElementById('botao-cadastro')

    if (!idade) {
        return;
    }

    function verificarIdade() {
        if (Number(idade.value) <= 18) {
            botao.setAttribute("disabled","true")  //desativa o botao
        }else{
            botao.removeAttribute("disabled")   // ativa o botão
        }
    }

    idade.addEventListener("input", verificarIdade);
});