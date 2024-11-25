import { API_URL } from "./api.js";

// Função para carregar solicitações
async function carregarSolicitacoes() {
  try {
    const response = await fetch(`${API_URL}/solicitacoes`);
    if (!response.ok) throw new Error("Erro ao carregar solicitações.");
    const solicitacoes = await response.json();

    const tbody = document.getElementById("transferTableBody");
    tbody.innerHTML = ""; // Limpa a tabela

    solicitacoes.forEach((cadastro) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${cadastro.origem || "Origem não definida"}</td>
        <td>${cadastro.destino || "Destino não definido"}</td>
        <td>${cadastro.motivo || "Motivo não especificado"}</td>
        <td>
          <button class="delete-button" onclick="excluirSolicitacao('${cadastro.id}')">Excluir</button>
        </td>
      `;
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error(error);
    alert("Erro ao carregar solicitações.");
  }
}

// Função para excluir uma solicitação
async function excluirSolicitacao(id) {
  if (!confirm("Deseja realmente excluir esta solicitação?")) return;

  try {
    const response = await fetch(`${API_URL}/solicitacoes/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Erro ao excluir solicitação.");
    alert("Solicitação excluída com sucesso!");
    carregarSolicitacoes(); // Recarrega a tabela
  } catch (error) {
    console.error(error);
    alert("Erro ao excluir solicitação.");
  }
}

// Chama a função ao carregar a página
carregarSolicitacoes();
