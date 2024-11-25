import { API_URL } from "./api.js";

async function carregarHospitais() {
  try {
    const response = await fetch(`${API_URL}/unidades-hospitalares`);
    if (!response.ok) throw new Error("Erro ao carregar hospitais.");
    const hospitais = await response.json();

    const tbody = document.getElementById("hospitalTableBody");
    tbody.innerHTML = ""; // Limpa a tabela

    hospitais.forEach((hospital) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${hospital.nome}</td>
        <td>${hospital.telefone || "N/A"}</td>
        <td>${hospital.email || "N/A"}</td>
        <td>${hospital.endereco?.rua || "Endereço não informado"}</td>
        <td>
          <button class="delete-button" onclick="excluirHospital('${hospital.id}')">Excluir</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error(error);
    alert("Erro ao carregar hospitais.");
  }
}

async function excluirHospital(id) {
  if (!confirm("Deseja realmente excluir este hospital?")) return;

  try {
    const response = await fetch(`${API_URL}/unidades-hospitalares/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Erro ao excluir hospital.");
    alert("Hospital excluído com sucesso!");
    carregarHospitais(); // Recarrega a lista
  } catch (error) {
    console.error(error);
    alert("Erro ao excluir hospital.");
  }
}

carregarHospitais();
