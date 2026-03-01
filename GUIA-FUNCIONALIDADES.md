# 🚀 Guía Rápida - Nuevas Funcionalidades

## 📱 PWA - Aplicación Web Instalable

### ¿Qué es una PWA?
Una Progressive Web App (PWA) es una página web que se puede instalar como aplicación en tu dispositivo. Los clientes pueden acceder a tu negocio desde su pantalla de inicio como si fuera una app de la Play Store o App Store, ¡pero sin descargar nada!

### Beneficios para tu negocio:
✅ **Mayor engagement**: Los clientes tienen acceso directo desde su pantalla de inicio
✅ **Funciona offline**: Pueden ver el menú incluso sin internet
✅ **Notificaciones**: (Próxima funcionalidad) Enviar promociones directamente
✅ **Más profesional**: Parece una app real, aumenta la confianza
✅ **Gratis**: Sin costos de App Store o Play Store

### ¿Cómo la instalan tus clientes?

#### En computadora (Chrome/Edge):
1. Entran a tu página web
2. Ven el botón "Instalar como App" en el header (arriba a la derecha)
3. Hacen clic y confirman
4. ¡Listo! Se abre como ventana independiente

#### En Android:
1. Abren tu página en Chrome
2. Aparece un mensaje abajo: "Agregar a pantalla de inicio"
3. O van a Menú (⋮) > "Agregar a pantalla de inicio"
4. Confirman y ¡ya tienen el ícono con tu logo!

#### En iPhone/iPad:
1. Abren tu página en Safari
2. Tocan el botón de compartir (□↑)
3. Seleccionan "Agregar a pantalla de inicio"
4. ¡La app aparece junto a sus otras apps!

### ¿Cómo se ve?
- **Icono**: Hamburguesa 🍔 con fondo dorado
- **Nombre**: El Pasaje Food
- **Pantalla completa**: Sin barras del navegador, como app nativa
- **Menú rápido**: Atajos directos a "Hacer Pedido", "Ver Menú" y "Ubicación"

---

## 🤖 Chatbot Inteligente

### ¿Qué hace?
Tu asistente virtual que ayuda a los clientes a elegir y pedir. Funciona 24/7 sin descanso.

### Características principales:

#### 1. Saludo automático
Cuando abren el chat, el bot dice:
> "¡Hola! 👋 Bienvenido a El Pasaje Food. ¿Qué te gustaría pedir hoy?"

Con botones:
- Ver Menú 🍔
- Promociones 🔥
- Horarios ⏰

#### 2. Muestra el menú con precios
Al pedir ver el menú, muestra todas las burgers con:
- Emoji identificador
- Nombre
- Precio actual y tachado
- Son clickeables para ver detalles

#### 3. Descripciones persuasivas
Cuando eligen una burger, el bot describe cada una de forma DELICIOSA:

**Ejemplo - Burger LOCA:**
> "¡LA LOCURA HECHA HAMBURGUESA! Carne premium, bacon crocante que truena al morder, queso azul picante, jalapeños que te hacen llorar (de felicidad), cebolla crispy frita, huevo a la plancha con yema líquida y salsa chipotle que EXPLOTA en tu boca. Jugosa, crocante, fresca... ¡es el equilibrio perfecto entre la LOCURA y el SABOR CELESTIAL!"

Con botones:
- 🛒 ¡La quiero! Pedir por WhatsApp
- 🔙 Ver otros combos

#### 4. Integración con WhatsApp
Al hacer clic en "¡La quiero!", abre WhatsApp con el mensaje pre-escrito:
```
¡Hola! Quiero pedir:

🔥 Burger LOCA
Precio: $18.400
```

#### 5. Información de horarios en tiempo real
El bot sabe si estás abierto o cerrado AHORA MISMO:
- ✅ "¡Estamos ABIERTOS ahora!"
- ⏰ "Cerrado ahora, pero volvemos pronto"
- ⚠️ "Hoy estamos cerrados (descansamos los lunes)"

#### 6. Respuestas naturales
Entiende diferentes formas de preguntar:
- "quiero una hamburguesa" → Muestra menú
- "cuánto cuesta" → Muestra menú con precios
- "están abiertos?" → Muestra horarios
- "hola" → Saluda y ofrece opciones
- "gracias" → Responde amablemente

### ¿Cómo personalizarlo?

#### Cambiar descripciones (más o menos locas):
Edita `chatbot.js`, busca el array `combos` y cambia las descripciones:

```javascript
{
    name: 'Burger SABROSA',
    description: 'Tu texto aquí... ¡Hacelo más apetitoso!'
}
```

#### Agregar nuevos combos:
Añade un objeto al array `combos`:

```javascript
{
    name: 'Tu Nueva Burger',
    price: 15000,
    oldPrice: 20000,
    emoji: '🍔',
    description: 'Descripción irresistible...',
    includes: ['Incluye 1', 'Incluye 2']
}
```

#### Cambiar respuestas del bot:
En la función `processMessage()` puedes agregar nuevas palabras clave:

```javascript
if (lowerMessage.includes('vegano') || lowerMessage.includes('vegetariano')) {
    addMessage('Próximamente tendremos opciones veganas!', 'bot');
}
```

---

## 🔘 Botones Flotantes Duales

### Ubicación:
Esquina inferior derecha, apilados verticalmente.

### Botón 1: "¡Quiero pedir!" (Dorado)
- Scroll suave a la sección de combos
- Color: Gradiente dorado/cobre
- Icono: Escudo protegido

### Botón 2: WhatsApp (Verde)
- Abre chat directo de WhatsApp
- Color: Verde WhatsApp oficial
- Icono: Logo de WhatsApp

### En móvil:
Se convierten en círculos sin texto para ahorrar espacio.

---

## 🎠 Carrusel de Combos

### ¿Dónde está?
Justo arriba de la sección "Tu Elección, Nuestra Pasión" (Experiencia).

### ¿Qué hace?
- Muestra los 4 combos deslizándose continuamente
- Loop infinito y suave
- Se detiene al pasar el mouse (hover)
- Atrae la atención visualmente

### Personalizar velocidad:
En `styles.css`, busca:
```css
animation: scroll 30s linear infinite;
```
Cambia `30s` a más segundos (más lento) o menos (más rápido).

---

## 💡 Tips de Uso

### Para maximizar conversiones:

1. **Actualiza descripciones del chatbot mensualmente**
   - Mantenlas frescas y apetitosas
   - Menciona ingredientes de temporada
   - Usa palabras sensoriales: "crujiente", "jugoso", "derretido"

2. **Promociona la app instalable**
   - En tus redes: "¡Descarga nuestra app!"
   - En el local: Cartel con QR + "Instalá la app"
   - Stories mostrando cómo instalarla

3. **Responde rápido en WhatsApp**
   - El chatbot los prepara, tú cierras la venta
   - Usa respuestas rápidas de WhatsApp Business
   - Tiempo ideal de respuesta: < 5 minutos

4. **Analiza qué preguntan**
   - Mira la consola del navegador (F12)
   - Ve qué buscan los clientes
   - Agrega respuestas para esas preguntas

5. **Promociones en el chatbot**
   - Actualiza el mensaje de "promo" semanalmente
   - Menciona combos del día
   - Crea urgencia: "Solo hoy"

---

## 📊 Métricas a Observar

### Google Analytics (recomendado instalar):
- Cuántos abren el chatbot
- Qué tan rápido llegan a WhatsApp
- Cuántos instalan la app
- En qué sección pasan más tiempo

### WhatsApp Business:
- Horarios con más mensajes
- Combos más pedidos
- Preguntas frecuentes no respondidas por el bot

---

## 🔧 Solución de Problemas

### El botón "Instalar como App" no aparece:
- Asegúrate de que la página esté en HTTPS (necesario para PWA)
- En local, funciona con `http://localhost` o `http://127.0.0.1`
- No funciona con `file://` (abriendo directamente el archivo)

### El chatbot no responde:
1. Abre la consola (F12)
2. Busca errores en la pestaña "Console"
3. Verifica que `chatbot.js` esté cargando correctamente

### El carrusel no se mueve:
1. Verifica que `styles.css` tenga la animación `@keyframes scroll`
2. Intenta refrescar con Ctrl + F5 (limpia cache)

### Los botones flotantes se superponen en móvil:
Esto es normal, se ajustan automáticamente. Si quieres cambiar la posición:
```css
.floating-buttons {
    bottom: 20px;  /* Ajusta aquí */
    right: 20px;   /* Y aquí */
}
```

---

## 🎯 Próximos Pasos Sugeridos

1. **Subir a un hosting real** (Netlify, Vercel, o tu servidor)
2. **Configurar HTTPS** (necesario para PWA funcional)
3. **Agregar Google Analytics** (medir conversiones)
4. **Crear notificaciones push** (próxima actualización)
5. **Sistema de pedidos más completo** (carrito de compras)

---

## 📞 Necesitas Ayuda?

Si necesitas personalizar algo más específico:
- Busca tutoriales de JavaScript/CSS
- Usa ChatGPT o Claude para ayuda con código
- Contrata un desarrollador freelance

**¡Tu landing page ahora es una máquina de conversión! 🚀🍔**
