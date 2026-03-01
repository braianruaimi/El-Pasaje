// PWA - Progressive Web App
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

// Detectar si la app ya está instalada
if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
    // Ya está instalada
    installBtn.classList.add('hidden');
}

// Capturar el evento beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevenir que Chrome 67 y anteriores muestren automáticamente el prompt
    e.preventDefault();
    // Guardar el evento para poder usarlo después
    deferredPrompt = e;
    // Mostrar el botón de instalación
    installBtn.classList.remove('hidden');
});

// Manejar el clic en el botón de instalación
installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) {
        return;
    }
    
    // Mostrar el prompt de instalación
    deferredPrompt.prompt();
    
    // Esperar a que el usuario responda
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
        console.log('✅ Usuario aceptó la instalación');
    } else {
        console.log('❌ Usuario rechazó la instalación');
    }
    
    // Ya no necesitamos el prompt
    deferredPrompt = null;
    installBtn.classList.add('hidden');
});

// Detectar cuando se instala la app
window.addEventListener('appinstalled', () => {
    console.log('🎉 ¡App instalada con éxito!');
    installBtn.classList.add('hidden');
    deferredPrompt = null;
    
    // Mostrar mensaje de bienvenida
    alert('¡Gracias por instalar El Pasaje Food! 🍔\nAhora puedes acceder rápidamente desde tu pantalla de inicio.');
});

// Registrar Service Worker para funcionalidad offline
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('✅ Service Worker registrado:', registration.scope);
            })
            .catch((error) => {
                console.log('❌ Error al registrar Service Worker:', error);
            });
    });
}
