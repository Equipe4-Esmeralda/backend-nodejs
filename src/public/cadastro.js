const form = document.querySelector('.form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/auth/register', {  // Updated to include /api prefix
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            // Registration successful
            const data = await response.json();
            alert('Cadastro realizado com sucesso!');
            window.location.href = '/index.html'; // Added forward slash
        } else {
            const data = await response.json();
            alert(`Erro no cadastro: ${data.error}`);
        }
    } catch (error) {
        console.error('Registration error:', error);
        alert('Erro na requisição de cadastro.');
    }
});
