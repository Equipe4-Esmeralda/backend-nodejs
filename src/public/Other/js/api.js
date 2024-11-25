const API_BASE_URL = "http://localhost:3000"; // Atualize conforme necessário

// Função para requisições GET
async function apiGet(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  if (!response.ok) {
    throw new Error(`Erro ao buscar dados: ${response.statusText}`);
  }
  return response.json();
}

async function apiPost(endpoint, data) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Erro ao enviar dados");
  }
  return response.json();
}

async function apiDelete(endpoint) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error(`Erro ao deletar: ${response.statusText}`);
  }
  return response.json();
}

