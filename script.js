// Executa o script somente após o carregamento da página
window.onload = function () {
    // Seleciona o formulário da página
    const formulario = document.querySelector("form");
    // Evento disparado ao tentar enviar o formulário
    formulario.addEventListener("submit", function (evento) {
        // Impede o envio automático da página
        evento.preventDefault();
        // Captura os dados digitados nos campos
        let nome = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let mensagem = document.getElementById("message").value;
        // Validação dos campos 
        if(nome === "" || email === "" || mensagem === "") {
            alert("Preencha todos os campos antes de realizar o envio.");
            // Para a execução aqui se houver erro
            return; 
        }

        // Simulação de envio exibindo um alerta
        alert(`${nome}, sua mensagem foi enviada com sucesso!`);

        // Limpa o formulário após sua validação e envio 
        formulario.reset();
    }); 

};