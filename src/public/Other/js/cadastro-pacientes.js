document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("formCadastroPaciente").addEventListener("submit", async (event) => {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Coleta os valores dos campos
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const sexo = document.getElementById("sexo").value;

    const pacienteData = { nome, cpf, dataNascimento, sexo };

    try {
      // Envia os dados para o backend
      await apiPost("/pacientes", pacienteData);
      alert("Paciente cadastrado com sucesso!");

      // Redireciona para a página de Pacientes após o cadastro
      window.location.href = "pacientes.html";
    } catch (erro) {
      console.error("Erro ao cadastrar paciente:", erro);
      alert("Erro ao cadastrar paciente. Por favor, tente novamente.");

      // Redireciona para a página de Pacientes mesmo em caso de erro
      window.location.href = "pacientes.html";
    }
  });
});
