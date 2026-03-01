// Animaciones al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos para animarlos
document.addEventListener('DOMContentLoaded', () => {
    // Animar cards al entrar en viewport
    const animateElements = document.querySelectorAll(
        '.value-card, .experience-card, .combo-card, .horario-card, .info-card'
    );
    
    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Efecto parallax en hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Contador de animación para horarios
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.horario-time, .combo-icon');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible && !el.classList.contains('animated')) {
                el.classList.add('animated');
                el.style.animation = 'pulse 1s ease';
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar al cargar

    // Efecto hover en combo cards
    const comboCards = document.querySelectorAll('.combo-card');
    comboCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Preload de imágenes importantes
    const preloadImages = [
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1920&q=80',
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
        'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80'
    ];

    preloadImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Añadir clase activa al botón de WhatsApp al hacer scroll
    window.addEventListener('scroll', () => {
        const whatsappBtn = document.querySelector('.whatsapp-float');
        if (window.scrollY > 500) {
            whatsappBtn.style.opacity = '1';
        }
    });

    // Efecto de texto brillante en el título del hero
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        let hue = 0;
        setInterval(() => {
            hue = (hue + 1) % 360;
            heroTitle.style.filter = `hue-rotate(${hue}deg)`;
        }, 50);
    }

    // Gestión de mapa de Google Maps
    const mapIframe = document.querySelector('.map-container iframe');
    if (mapIframe) {
        // Lazy loading del mapa
        const mapObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    mapIframe.src = mapIframe.src;
                    mapObserver.unobserve(entry.target);
                }
            });
        });
        mapObserver.observe(mapIframe);
    }

    // Feedback visual al clickear botones
    const buttons = document.querySelectorAll('.cta-button, .combo-button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Crear efecto ripple
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.animation = 'ripple 0.6s ease-out';
            
            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left - 10) + 'px';
            ripple.style.top = (e.clientY - rect.top - 10) + 'px';
            
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Añadir animación CSS para el ripple
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                width: 100px;
                height: 100px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Mostrar horario actual
    const showCurrentDaySchedule = () => {
        const now = new Date();
        const day = now.getDay(); // 0 = Domingo, 1 = Lunes, etc.
        const hour = now.getHours();
        
        let message = '';
        let isOpen = false;

        if (day === 1) { // Lunes
            message = 'Estamos cerrados los lunes.';
        } else if (day >= 2 && day <= 5) { // Martes a Viernes
            if (hour >= 11 && hour < 14) {
                message = '¡Estamos abiertos! Servicio de almuerzo.';
                isOpen = true;
            } else if (hour >= 20 && hour < 23) {
                message = '¡Estamos abiertos! Servicio de cena.';
                isOpen = true;
            } else {
                message = 'Cerrado ahora. Volvemos en el próximo horario.';
            }
        } else { // Sábado y Domingo
            if (hour >= 20 && hour < 23) {
                message = '¡Estamos abiertos! Servicio de cena.';
                isOpen = true;
            } else {
                message = '20 hs ACTIVOS !!';
            }
        }

        // Crear badge de estado si no existe
        let statusBadge = document.querySelector('.status-badge');
        if (!statusBadge) {
            statusBadge = document.createElement('div');
            statusBadge.className = 'status-badge';
            statusBadge.style.cssText = `
                position: fixed;
                bottom: 30px;
                left: 30px;
                padding: 12px 20px;
                border-radius: 25px;
                font-weight: 700;
                font-size: 14px;
                z-index: 999;
                box-shadow: 0 5px 20px rgba(0,0,0,0.3);
                transition: all 0.3s ease;
            `;
            document.body.appendChild(statusBadge);
        }

        statusBadge.textContent = message;
        if (isOpen) {
            statusBadge.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            statusBadge.style.color = 'white';
        } else {
            statusBadge.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
            statusBadge.style.color = 'white';
        }
    };

    showCurrentDaySchedule();
    // Actualizar cada minuto
    setInterval(showCurrentDaySchedule, 60000);

    // Control manual del carrusel
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselTrack = document.getElementById('carousel-track');
    const prevButton = document.getElementById('carousel-prev');
    const nextButton = document.getElementById('carousel-next');
    
    if (carouselContainer && carouselTrack && prevButton && nextButton) {
        let currentScroll = 0;
        const itemWidth = 310; // 280px + 30px gap
        
        // Función para mover el carrusel manualmente
        const moveCarousel = (direction) => {
            // Pausar la animación temporalmente
            carouselTrack.style.animationPlayState = 'paused';
            
            // Calcular nueva posición
            if (direction === 'next') {
                currentScroll -= itemWidth;
            } else {
                currentScroll += itemWidth;
            }
            
            // Aplicar transformación suave
            carouselTrack.style.transition = 'transform 0.5s ease';
            carouselTrack.style.transform = `translateX(${currentScroll}px)`;
            
            // Reanudar animación después de 3 segundos
            setTimeout(() => {
                carouselTrack.style.transition = '';
                carouselTrack.style.transform = '';
                carouselTrack.style.animationPlayState = 'running';
                currentScroll = 0;
            }, 3000);
        };
        
        // Event listeners para las flechas
        prevButton.addEventListener('click', (e) => {
            e.preventDefault();
            moveCarousel('prev');
        });
        
        nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            moveCarousel('next');
        });
    }

    // Consola de bienvenida
    console.log('%c🍔 El Pasaje Food', 'font-size: 30px; font-weight: bold; color: #F5C842;');
    console.log('%c¡Gracias por visitar nuestra web!', 'font-size: 16px; color: #D4953C;');
    console.log('%cSi tenés hambre, ¡hace tu pedido por WhatsApp! 📱', 'font-size: 14px; color: #FFF;');
});

// Performance: reducir animaciones en dispositivos con batería baja
if ('getBattery' in navigator) {
    navigator.getBattery().then(battery => {
        if (battery.level < 0.2) {
            document.body.classList.add('reduce-motion');
            const style = document.createElement('style');
            style.textContent = `
                .reduce-motion * {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            `;
            document.head.appendChild(style);
        }
    });
}

// Función de acceso al dashboard CEO con contraseña
function accessCEO() {
    const password = prompt('🔐 Acceso Restringido\nIngrese la contraseña:');
    
    if (password === '1234') {
        window.location.href = 'dashboard.html';
    } else if (password !== null) {
        alert('❌ Contraseña incorrecta');
    }
}
