import { API_URL } from "./api.js";

document.getElementById("formCadastroTransferencia").addEventListener("submit", async (event) => {
  event.preventDefault(); // Evita o reload da página

  const medicoOrigem = document.getElementById("medicoOrigem").value;
  const paciente = document.getElementById("paciente").value;
  const justificativa = document.getElementById("justificativa").value;

  try {
    const response = await fetch(`${API_URL}/solicitacoes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ medicoOrigem, paciente, justificativa }),
    });

    if (!response.ok) throw new Error("Erro ao cadastrar solicitação.");
    alert("Solicitação cadastrada com sucesso!");
    window.location.href = "solicitacoes.html"; // Redireciona após sucesso
  } catch (error) {
    console.error(error);
    alert("Erro ao cadastrar solicitação.");
  }
});
