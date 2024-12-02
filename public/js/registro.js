document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const submitButton = document.getElementById('submit-button');

    registerForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        submitButton.disabled = true;
        submitButton.textContent = 'Registrando...';

        try {
            // Verificar que el servidor esté disponible primero
            const testConnection = await fetch('/');
            if (!testConnection.ok) {
                throw new Error('No se puede conectar al servidor');
            }

            const userData = {
                nombre: document.getElementById('nombre').value,
                usuario: document.getElementById('usuario').value,
                email: document.getElementById('email').value,
                contraseña: document.getElementById('contraseña').value
            };

            console.log('Intentando enviar:', userData);

            const response = await fetch('/registrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Respuesta:', data);

            alert('Registro exitoso');
            window.location.href = '/HTML/inicio-secion.html';

        } catch (error) {
            console.error('Error completo:', error);
            alert('Error en el registro: ' + error.message);
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Crear cuenta';
        }
    });
});


