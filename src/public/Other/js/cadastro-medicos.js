import { API_URL } from "./api.js";

document.getElementById("formCadastroMedico").addEventListener("submit", async (event) => {
  event.preventDefault(); // Evita o reload da página

  const nome = document.getElementById("nome").value;
  const crm = document.getElementById("crm").value;
  const especialidade = document.getElementById("especialidade").value;
  const papel = document.getElementById("papel").value;

  try {
    const response = await fetch(`${API_URL}/medicos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, crm, especialidade, papel }),
    });

    if (!response.ok) throw new Error("Erro ao cadastrar médico.");
    alert("Médico cadastrado com sucesso!");
    window.location.href = "medicos.html"; // Redireciona após sucesso
  } catch (error) {
    console.error(error);
    alert("Erro ao cadastrar médico.");
    window.location.href = "medicos.html";
  }
});
