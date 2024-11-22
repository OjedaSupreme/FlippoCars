document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const submitButton = document.getElementById('submit-button');

    registerForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Registrando...';

        // Get form values
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;

        // Basic validation
        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const userData = {
            nombre_usuario: username,
            correo_electronico: email,
            contraseña_usuario: password
        };

        // Log the data being sent
        console.log('Sending data:', userData);

        try {
            const response = await fetch('/registrar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();
            console.log('Server response:', data);

            if (response.ok) {
                alert('Registro exitoso');
                // Add a small delay before redirect to ensure the alert is seen
                setTimeout(() => {
                    window.location.href = '/HTML/inicio-secion.html';
                }, 1000);
            } else {
                alert(data.error || data.details || 'Error en el registro');
                // Re-enable button on error
                submitButton.disabled = false;
                submitButton.textContent = 'Crear cuenta';
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error en el registro: ' + error.message);
            // Re-enable button on error
            submitButton.disabled = false;
            submitButton.textContent = 'Crear cuenta';
        }
    });
});
