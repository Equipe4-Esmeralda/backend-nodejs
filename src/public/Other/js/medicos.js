import { API_URL } from "./api.js";

async function carregarMedicos() {
  try {
    const response = await fetch(`${API_URL}/medicos`);
    if (!response.ok) throw new Error("Erro ao carregar médicos.");
    const medicos = await response.json();

    const tbody = document.getElementById("medicoTableBody");
    tbody.innerHTML = ""; // Limpa a tabela

    medicos.forEach((medico) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${medico.nome}</td>
        <td>${medico.crm}</td>
        <td>${medico.especialidade}</td>
        <td>${medico.papel}</td>
        <td>
          <button class="delete-button" onclick="excluirMedico('${medico.id}')">Excluir</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error(error);
    alert("Erro ao carregar médicos.");
  }
}

async function excluirMedico(id) {
  if (!confirm("Deseja realmente excluir este médico?")) return;

  try {
    const response = await fetch(`${API_URL}/medicos/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Erro ao excluir médico.");
    alert("Médico excluído com sucesso!");
    carregarMedicos(); // Recarrega a lista
  } catch (error) {
    console.error(error);
    alert("Erro ao excluir médico.");
  }
}

carregarMedicos();
