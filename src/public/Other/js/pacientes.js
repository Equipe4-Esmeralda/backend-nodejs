import { API_URL } from "./api.js";

async function carregarPacientes() {
  try {
    const response = await fetch(`${API_URL}/pacientes`);
    if (!response.ok) throw new Error("Erro ao carregar pacientes.");
    const pacientes = await response.json();

    const tbody = document.getElementById("pacienteTableBody");

    pacientes.forEach((paciente) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${paciente.nome}</td>
        <td>${paciente.cpf}</td>
        <td>${paciente.dataNascimento || "N/A"}</td>
        <td>${paciente.sexo}</td>
        <td>
          <button class="delete-button" onclick="excluirPaciente('${paciente.id}')">Excluir</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error(error);
    alert("Erro ao carregar pacientes.");
  }
}

async function excluirPaciente(id) {
  if (!confirm("Deseja realmente excluir este paciente?")) return;

  try {
    const response = await fetch(`${API_URL}/pacientes/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Erro ao excluir paciente.");
    alert("Paciente excluído com sucesso!");
    carregarPacientes(); // Recarrega a lista
  } catch (error) {
    console.error(error);
    alert("Erro ao excluir paciente.");
  }
}

carregarPacientes();
