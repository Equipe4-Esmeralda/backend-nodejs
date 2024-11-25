// editar-paciente.js
import { API_URL } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const pacienteId = urlParams.get("id");

  if (!pacienteId) {
    alert("Paciente não encontrado.");
    window.location.href = "pacientes.html";
    return;
  }

  // Buscar os dados do paciente
  try {
    const response = await fetch(`${API_URL}/pacientes/${pacienteId}`);
    if (!response.ok) throw new Error("Erro ao buscar dados do paciente.");

    const paciente = await response.json();

    // Preencher o formulário com os dados atuais
    document.getElementById("id").value = paciente.id;
    document.getElementById("nome").value = paciente.nome;
    document.getElementById("cpf").value = paciente.cpf;
    document.getElementById("dataNascimento").value = paciente.dataNascimento ? paciente.dataNascimento.substring(0, 10) : "";
    document.getElementById("sexo").value = paciente.sexo;

  } catch (error) {
    console.error(error);
    alert("Erro ao carregar os dados do paciente.");
    window.location.href = "pacientes.html";
  }

  // Manipular o envio do formulário
  document.getElementById("formEditarPaciente").addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = document.getElementById("id").value;
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const dataNascimento = document.getElementById("dataNascimento").value;
    const sexo = document.getElementById("sexo").value;

    try {
      const response = await fetch(`${API_URL}/pacientes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, cpf, dataNascimento, sexo }),
      });

      if (!response.ok) throw new Error("Erro ao atualizar paciente.");
      alert("Paciente atualizado com sucesso!");
      window.location.href = "pacientes.html";
    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar paciente.");
    }
  });
});
