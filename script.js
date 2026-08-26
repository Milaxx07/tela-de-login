// 1. Seleção dos elementos do HTML usando os IDs
const formLogin = document.getElementById("formLogin");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const btnSenha = document.getElementById("btnSenha");
const mensagemErro = document.getElementById("mensagemErro");

// 2. Evento de envio do formulário (submit)
formLogin.addEventListener("submit", (event) => {
  // Evita que a página recarregue ao clicar no botão
  event.preventDefault();

  // Limpa mensagem de erro anterior
  mensagemErro.textContent = "";

  const email = emailInput.value.trim();
  const senha = senhaInput.value.trim();

  // Validação simples: verificar campos vazios
  if (!email || !senha) {
    mensagemErro.textContent = "Por favor, preencha todos os campos.";
    return;
  }

  // Validação do tamanho mínimo da senha
  if (senha.length < 6) {
    mensagemErro.textContent = "A senha deve ter pelo menos 6 caracteres.";
    return;
  }

  // Simulação de login bem-sucedido
  alert("Login efetuado com sucesso!");
  console.log("Dados prontos para envio:", { email, senha });
  
  // Aqui enviaria os dados para um backend usando fetch()
});

// 3. Funcionalidade de Mostrar / Ocultar Senha
btnSenha.addEventListener("click", () => {
  // Se for password, muda para text (revela). Se for text, volta para password (esconde).
  if (senhaInput.type === "password") {
    senhaInput.type = "text";
    btnSenha.classList.replace("bxs-lock-alt", "bxs-lock-open-alt"); // Troca ícone do cadeado
  } else {
    senhaInput.type = "password";
    btnSenha.classList.replace("bxs-lock-open-alt", "bxs-lock-alt");
  }
});