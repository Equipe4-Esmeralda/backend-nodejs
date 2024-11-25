async function carregarNavbar() {
  try {
    // Caminho relativo ajustado
    const response = await fetch('./paginas.html');
    if (!response.ok) throw new Error(`Erro ao carregar o menu: ${response.statusText}`);

    // Converte o conteúdo em texto
    const html = await response.text();

    // Insere o conteúdo no placeholder se ele existir
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
      navbarPlaceholder.innerHTML = html;
    } else {
      console.warn("Elemento 'navbar-placeholder' não encontrado.");
    }
  } catch (error) {
    console.error('Erro ao carregar o menu de navegação:', error);
  }
}

// Chama a função ao carregar a página
carregarNavbar();


