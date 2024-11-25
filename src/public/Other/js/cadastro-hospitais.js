import { API_URL } from "./api.js";

document.getElementById("formCadastroHospital").addEventListener("submit", async (event) => {
  event.preventDefault(); // Evita o reload da página

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const endereco = {
    rua: document.getElementById("rua").value,
    complemento: document.getElementById("complemento").value,
    bairro: document.getElementById("bairro").value,
    cep: document.getElementById("cep").value,
    cidade: document.getElementById("cidade").value,
    estado: document.getElementById("estado").value,
  };

  try {
    const response = await fetch(`${API_URL}/unidades-hospitalares`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, telefone, email, endereco }),
    });

    if (!response.ok) throw new Error("Erro ao cadastrar hospital.");
    alert("Hospital cadastrado com sucesso!");
    window.location.href = "hospitais.html"; // Redireciona após sucesso
  } catch (error) {
    console.error(error);
    alert("Erro ao cadastrar hospital.");
    window.location.href = "hospitais.html";
  }
});
