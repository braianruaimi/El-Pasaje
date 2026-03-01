# 🍔 El Pasaje Food - Landing Page

Landing page de alta conversión para hamburguesas artesanales premium con PWA y chatbot inteligente.

## 🎨 Características

- **Diseño vibrante y moderno** con paleta de colores negro carbono, madera y dorado eléctrico
- **Totalmente responsive** - se adapta a móviles, tablets y desktop
- **Optimizada para conversión** - botones de WhatsApp estratégicamente ubicados
- **PWA (Progressive Web App)** - instalable como aplicación nativa
- **Chatbot inteligente** - asistente virtual que ayuda a los clientes
- **Carrusel animado** - muestra los combos de forma atractiva
- **Animaciones suaves** - experiencia de usuario profesional
- **Información clara** - horarios, ubicación y propuesta de valor destacados

## 🚀 Nuevas Funcionalidades

### 📱 Aplicación Web Progresiva (PWA)
- **Instalable**: Los usuarios pueden instalar la página como app en su dispositivo
- **Botón en header**: Visible en la parte superior derecha
- **Funciona offline**: Acceso básico sin conexión a internet
- **Icono en pantalla de inicio**: Acceso rápido como una app nativa
- **Compatible**: Chrome, Edge, Firefox, Safari y navegadores móviles

### 🤖 Chatbot Inteligente
- **Saludo automático**: Da la bienvenida y pregunta qué quiere pedir
- **Muestra el menú**: Presenta todos los combos con precios
- **Descripciones atractivas**: Cada burger tiene una descripción deliciosa y persuasiva
- **Integración WhatsApp**: Finaliza el pedido enviando al cliente a WhatsApp
- **Respuestas naturales**: Entiende diferentes formas de hacer preguntas
- **Información de horarios**: Indica si está abierto o cerrado en tiempo real
- **Botón flotante dorado**: Fácil acceso desde cualquier parte de la página

### 🎠 Carrusel de Combos
- **Animación continua**: Los combos se mueven automáticamente
- **Pause al hover**: Se detiene cuando pasas el mouse
- **Sobre la sección de Experiencia**: Ubicado estratégicamente
- **Responsive**: Se adapta perfectamente a móviles

### 🔘 Botones Flotantes Duales
- **"¡Quiero pedir!"**: Navega a la sección de combos
- **WhatsApp**: Abre chat directo para pedidos
- **Diseño apilado**: Ubicados en la esquina inferior derecha
- **Colores distintivos**: Dorado para pedidos, verde para WhatsApp

## 🔧 Archivos del Proyecto

### Principales
- `index.html` - Estructura HTML completa
- `styles.css` - Estilos visuales con paleta profesional
- `script.js` - Interactividad general
- `chatbot.js` - Lógica del chatbot inteligente
- `pwa.js` - Funcionalidad de instalación PWA
- `manifest.json` - Configuración de la aplicación web
- `service-worker.js` - Cache y funcionalidad offline

### Documentación
- `README.md` - Instrucciones de uso
- `MARKETING.md` - Estrategias de marketing digital

## 🎯 Cómo Usar

### 1. Abrir la página
Simplemente abre el archivo `index.html` en tu navegador web.

### 2. Personalizar contenido

#### Cambiar número de WhatsApp
Busca en `index.html` y `chatbot.js` todas las apariciones de:
```
5491234567890
```
Y reemplázalas con tu número de WhatsApp (incluye código de país sin + ni espacios).

#### Actualizar dirección
- En la sección de ubicación del HTML
- El iframe del mapa de Google Maps con tu ubicación real

#### Cambiar precios
Actualiza los precios en dos lugares:
1. **HTML**: Sección de combos en `index.html`
2. **Chatbot**: Array `combos` en `chatbot.js`

#### Personalizar descripciones del chatbot
En `chatbot.js`, edita el array `combos` con tus propias descripciones persuasivas.

### 3. Instalar como aplicación

**En el navegador:**
1. Abre la página en Chrome, Edge o Firefox
2. Haz clic en el botón "Instalar como App" en el header
3. Confirma la instalación
4. ¡La app aparecerá en tu pantalla de inicio!

**En móvil:**
1. Abre la página en el navegador
2. Busca la opción "Agregar a pantalla de inicio"
3. ¡Listo! Acceso rápido como app nativa

### 4. Usar el chatbot

**Como cliente:**
1. Haz clic en el botón dorado del chatbot (esquina inferior)
2. Escribe tu pregunta o usa los botones rápidos
3. Explora el menú y lee las descripciones
4. Haz clic en "¡La quiero!" para ir a WhatsApp

**Como administrador:**
- Personaliza respuestas en `chatbot.js`
- Agrega nuevos combos al array
- Modifica descripciones para hacerlas más atractivas

## 🎨 Personalización de Colores

Si deseas cambiar los colores, edita las variables en `styles.css` (líneas 7-18):

```css
:root {
    --carbon-black: #1a1a1a;      /* Fondo principal */
    --electric-gold: #F5C842;     /* Dorado eléctrico */
    --copper: #C87533;            /* Cobre/terracota */
    /* ... otros colores */
}
```

## 📱 Funcionalidades Especiales

### Botón flotante de WhatsApp
Siempre visible en la esquina inferior derecha para facilitar pedidos.

### Badge de estado en tiempo real
Muestra automáticamente si el local está abierto o cerrado según el horario.

### Animaciones al scroll
Los elementos aparecen suavemente al hacer scroll.

### Modo ahorro de batería
Reduce automáticamente las animaciones si el dispositivo tiene batería baja.

## 🌐 Publicar tu página

### Opción 1: GitHub Pages (Gratis)
1. Crea una cuenta en [GitHub](https://github.com)
2. Crea un nuevo repositorio
3. Sube los archivos (index.html, styles.css, script.js)
4. Ve a Settings > Pages
5. Activa GitHub Pages
6. Tu sitio estará en: `tu-usuario.github.io/nombre-repo`

### Opción 2: Netlify (Gratis)
1. Ve a [Netlify](https://www.netlify.com)
2. Arrastra la carpeta con tus archivos
3. ¡Listo! Tu sitio estará publicado en segundos

### Opción 3: Hosting tradicional
Sube los 3 archivos a tu hosting mediante FTP o panel de control.

## 📊 Métricas Importantes

Para maximizar conversiones, considera:
- Agregar Google Analytics para rastrear visitas
- Implementar píxel de Facebook para remarketing
- Usar enlaces UTM en publicidad para medir campañas
- Revisar qué combos generan más clics

## 🔧 Mejoras Futuras Sugeridas

1. **Sistema de pedidos integrado** - Formulario que envíe automáticamente a WhatsApp
2. **Galería de fotos** - Mostrar más hamburguesas y el ambiente del local
3. **Testimonio de clientes** - Agregar reseñas y calificaciones
4. **Programa de fidelidad digital** - Sistema de puntos para clientes recurrentes
5. **Menú descargable en PDF** - Para que los clientes vean todas las opciones

## 💡 Tips para Mayor Conversión

1. **Actualiza fotos regularmente** - Usa fotos reales de tu local y productos
2. **Responde rápido en WhatsApp** - La velocidad de respuesta es clave
3. **Promociones limitadas** - Agrega urgencia ("Solo hoy", "Últimas unidades")
4. **Comparte en redes** - Linkea esta página desde Instagram y Facebook
5. **QR en el local** - Imprime un QR que lleve a la web para pedidos de mesa

## 📞 Soporte

Si necesitas ayuda para personalizar algo específico, puedes:
- Buscar tutoriales de HTML/CSS en YouTube
- Usar ChatGPT/Claude para ayuda con código
- Contratar un desarrollador freelance en Fiverr o similar

## 📄 Licencia

Este código es de uso libre. Puedes modificarlo y usarlo para tu negocio.

---

**¡Que tengas mucho éxito con El Pasaje Food! 🍔🔥**
