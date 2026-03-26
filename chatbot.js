// Chatbot con IA Natural
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWindow = document.getElementById('chatbot-window');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotText = document.getElementById('chatbot-text');
const chatbotSend = document.getElementById('chatbot-send');

// Datos de los combos
const combos = [
    {
        name: 'Burger SABROSA',
        price: 13200,
        oldPrice: 17850,
        emoji: '🍔',
        description: '¡La reina de las hamburguesas! Carne jugosa premium seleccionada a mano, queso derretido que se estira como sueño, lechuga fresca crujiente, tomate maduro y nuestra salsa secreta que te va a volar la cabeza. Todo eso entre dos panes artesanales horneados esta mañana. Es imposible comer solo una.',
        includes: ['Hamburguesa completa premium', 'Papas rústicas caseras']
    },
    {
        name: 'Burger Doble Queso y Doble Carne',
        price: 18300,
        oldPrice: 24600,
        emoji: '🍔🍔',
        description: '¿Querés PODER? Dos medallones de carne seleccionada a la parrilla, dos capas de queso cheddar derretido que se mezclan en una explosión de sabor, bacon crocante, cebolla caramelizada y salsa BBQ ahumada. Esto no es una hamburguesa, es una BESTIA de sabor que te deja sin palabras.',
        includes: ['Doble carne jugosa', 'Doble queso derretido', 'Papas rústicas caseras']
    },
    {
        name: 'Burger Cheddar',
        price: 12300,
        oldPrice: 15600,
        emoji: '🧀',
        description: 'Para los verdaderos amantes del queso. Cheddar premium importado que se derrite en tu boca, carne jugosa recién hecha, cebolla morada fresca, pepinillos crujientes y mostaza Dijon. Simple, elegante, DELICIOSA. El equilibrio perfecto entre calidad y precio.',
        includes: ['Cheddar premium', 'Carne seleccionada', 'Papas rústicas caseras']
    },
    {
        name: 'Burger LOCA',
        price: 18400,
        oldPrice: 23400,
        emoji: '🔥',
        description: '¡LA LOCURA HECHA HAMBURGUESA! Carne premium, bacon crocante que truena al morder, queso azul picante, jalapeños que te hacen llorar (de felicidad), cebolla crispy frita, huevo a la plancha con yema líquida y salsa chipotle que EXPLOTA en tu boca. Jugosa, crocante, fresca... ¡es el equilibrio perfecto entre la LOCURA y el SABOR CELESTIAL!',
        includes: ['Combinación única de sabores', 'Texturas irresistibles', 'Papas rústicas caseras']
    }
];

// Estado del chatbot
let conversationState = 'initial';
let selectedCombo = null;

// Toggle chatbot
chatbotToggle.addEventListener('click', () => {
    chatbotWindow.classList.toggle('active');
});

chatbotClose.addEventListener('click', () => {
    chatbotWindow.classList.remove('active');
});

// Enviar mensaje
function sendMessage() {
    const message = chatbotText.value.trim();
    if (message) {
        addMessage(message, 'user');
        chatbotText.value = '';
        processMessage(message);
    }
}

chatbotSend.addEventListener('click', sendMessage);
chatbotText.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Agregar mensaje
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'bot' ? 'bot-message' : 'user-message';
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Agregar mensaje con botones
function addBotMessageWithButtons(text, buttons) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'bot-message';
    
    let buttonsHTML = '';
    if (buttons && buttons.length > 0) {
        buttonsHTML = '<div class="quick-replies">';
        buttons.forEach(btn => {
            buttonsHTML += `<button class="quick-reply" data-action="${btn.action}">${btn.text}</button>`;
        });
        buttonsHTML += '</div>';
    }
    
    messageDiv.innerHTML = `<p>${text}</p>${buttonsHTML}`;
    chatbotMessages.appendChild(messageDiv);
    
    // Agregar event listeners a los botones
    messageDiv.querySelectorAll('.quick-reply').forEach(btn => {
        btn.addEventListener('click', () => {
            handleQuickReply(btn.dataset.action);
        });
    });
    
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Agregar combos
function showCombos() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'bot-message';
    
    let html = '<p>🔥 <strong>Estas son nuestras INCREÍBLES hamburguesas:</strong></p>';
    
    combos.forEach((combo, index) => {
        html += `
            <div class="combo-option" data-combo="${index}">
                <strong>${combo.emoji} ${combo.name}</strong>
                <span>$${combo.price.toLocaleString('es-AR')}</span> <s style="opacity: 0.6;">$${combo.oldPrice.toLocaleString('es-AR')}</s>
            </div>
        `;
    });
    
    messageDiv.innerHTML = html;
    chatbotMessages.appendChild(messageDiv);
    
    // Agregar event listeners a los combos
    messageDiv.querySelectorAll('.combo-option').forEach(option => {
        option.addEventListener('click', () => {
            const comboIndex = parseInt(option.dataset.combo);
            showComboDetails(comboIndex);
        });
    });
    
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Mostrar detalles del combo
function showComboDetails(index) {
    const combo = combos[index];
    selectedCombo = combo;
    
    const message = `
        <strong>${combo.emoji} ${combo.name}</strong><br><br>
        ${combo.description}<br><br>
        <strong>Incluye:</strong><br>
        ${combo.includes.map(item => `✓ ${item}`).join('<br>')}<br><br>
        <strong>Precio especial: $${combo.price.toLocaleString('es-AR')}</strong> <s style="opacity: 0.7;">$${combo.oldPrice.toLocaleString('es-AR')}</s><br><br>
        ¡Ahorrás $${(combo.oldPrice - combo.price).toLocaleString('es-AR')}! 🤑
    `;
    
    addBotMessageWithButtons(message, [
        { text: '🛒 ¡La quiero! Pedir por WhatsApp', action: 'order' },
        { text: '🔙 Ver otros combos', action: 'menu' }
    ]);
}

// Procesar mensaje
function processMessage(message) {
    const lowerMessage = message.toLowerCase();
    
    setTimeout(() => {
        if (lowerMessage.includes('menu') || lowerMessage.includes('menú') || lowerMessage.includes('hamburguesa') || lowerMessage.includes('combo')) {
            handleQuickReply('menu');
        } else if (lowerMessage.includes('promo') || lowerMessage.includes('oferta') || lowerMessage.includes('descuento')) {
            handleQuickReply('promos');
        } else if (lowerMessage.includes('hora') || lowerMessage.includes('abierto') || lowerMessage.includes('horario')) {
            handleQuickReply('horarios');
        } else if (lowerMessage.includes('hola') || lowerMessage.includes('buenos') || lowerMessage.includes('buenas')) {
            addBotMessageWithButtons(
                '¡Hola! 😊 ¿En qué te puedo ayudar?',
                [
                    { text: 'Ver Menú 🍔', action: 'menu' },
                    { text: 'Promociones 🔥', action: 'promos' },
                    { text: 'Horarios ⏰', action: 'horarios' }
                ]
            );
        } else if (lowerMessage.includes('precio') || lowerMessage.includes('cuesta') || lowerMessage.includes('cuanto')) {
            handleQuickReply('menu');
        } else if (lowerMessage.includes('pedido') || lowerMessage.includes('pedir') || lowerMessage.includes('quiero')) {
            handleQuickReply('menu');
        } else if (lowerMessage.includes('gracias')) {
            addMessage('¡De nada! 😊 Estoy aquí para ayudarte. ¿Algo más?', 'bot');
        } else {
            // Respuesta inteligente por defecto
            addBotMessageWithButtons(
                '🤔 Mmm, no estoy seguro de entender. Pero te puedo ayudar con:',
                [
                    { text: 'Ver Menú 🍔', action: 'menu' },
                    { text: 'Promociones 🔥', action: 'promos' },
                    { text: 'Horarios ⏰', action: 'horarios' }
                ]
            );
        }
    }, 800);
}

// Manejar respuestas rápidas
function handleQuickReply(action) {
    switch(action) {
        case 'menu':
            addMessage('Quiero ver el menú', 'user');
            setTimeout(() => {
                addMessage('¡Perfecto! Aquí están nuestras hamburguesas artesanales. Hacé clic en la que te guste para ver todos los detalles. 🤤', 'bot');
                setTimeout(() => {
                    showCombos();
                }, 500);
            }, 500);
            break;
            
        case 'promos':
            addMessage('¿Qué promociones tienen?', 'user');
            setTimeout(() => {
                addBotMessageWithButtons(
                    '🔥 <strong>¡PROMOCIONES IMBATIBLES!</strong><br><br>' +
                    '✨ Todos nuestros combos tienen descuentos increíbles<br>' +
                    '✨ Si venís al local, ¡la buena onda va por la casa!<br>' +
                    '✨ Podés agregar una Coca-Cola por solo $1.420<br><br>' +
                    '¿Querés ver el menú completo?',
                    [
                        { text: 'Sí, mostrame todo 🍔', action: 'menu' }
                    ]
                );
            }, 800);
            break;
            
        case 'horarios':
            addMessage('¿Cuáles son los horarios?', 'user');
            setTimeout(() => {
                const now = new Date();
                const day = now.getDay();
                const hour = now.getHours();
                let status = '';
                
                if (day === 1) {
                    status = '⚠️ <strong>Hoy estamos cerrados</strong> (descansamos los lunes)';
                } else if (day >= 2 && day <= 5) {
                    if (hour >= 11 && hour < 14) {
                        status = '✅ <strong>¡Estamos ABIERTOS ahora!</strong>';
                    } else if (hour >= 20 && hour < 23) {
                        status = '✅ <strong>¡Estamos ABIERTOS ahora!</strong>';
                    } else {
                        status = '⏰ <strong>Cerrado ahora</strong>, pero volvemos pronto';
                    }
                } else {
                    if (hour >= 20 && hour < 23) {
                        status = '✅ <strong>¡Estamos ABIERTOS ahora!</strong>';
                    } else {
                        status = '🔥 <strong>20 hs ACTIVOS !!</strong>';
                    }
                }
                
                addBotMessageWithButtons(
                    `${status}<br><br>` +
                    '<strong>🌞 Almuerzos:</strong><br>' +
                    'Martes a Viernes: 11:30 a 14:00 hs<br><br>' +
                    '<strong>🌙 Cenas:</strong><br>' +
                    'Martes a Domingos: 20:00 a 23:00 hs<br><br>' +
                    '<strong>❌ Lunes:</strong> Cerrado<br><br>' +
                    '¿Querés hacer un pedido?',
                    [
                        { text: '¡Sí, quiero pedir! 🍔', action: 'menu' }
                    ]
                );
            }, 800);
            break;
            
        case 'order':
            if (selectedCombo) {
                const whatsappMessage = encodeURIComponent(
                    `¡Hola! Quiero pedir en Burger:\n\n${selectedCombo.emoji} ${selectedCombo.name}\nPrecio: $${selectedCombo.price.toLocaleString('es-AR')}`
                );
                addMessage('¡Perfecto! Te llevo a WhatsApp para confirmar tu pedido', 'bot');
                setTimeout(() => {
                    window.open(`https://wa.me/5491234567890?text=${whatsappMessage}`, '_blank');
                }, 1000);
            }
            break;
    }
}

// Event listeners para los botones iniciales
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.quick-reply').forEach(btn => {
        btn.addEventListener('click', () => {
            handleQuickReply(btn.dataset.action);
        });
    });
});
