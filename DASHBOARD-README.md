# 📊 Dashboard CEO - El Pasaje Food

## Acceso al Dashboard

### Método 1: URL Directa
Abre en tu navegador:
```
file:///C:/Users/Public/el-pasaje-food/dashboard.html
```

O si está en servidor web:
```
https://tu-dominio.com/dashboard.html
```

**Nota:** El acceso directo por URL no requiere contraseña.

### Método 2: Punto Oculto Protegido 🔐
En el footer del sitio principal hay un punto blanco casi invisible (transparencia 99%) justo **ANTES** del símbolo ©2026.

**Ubicación exacta:** ●©2026 El Pasaje Food...

1. Ve al footer de la página principal
2. Posiciona el mouse justo antes del ©
3. Click en el punto invisible
4. Ingresa la contraseña: **1234**
5. Accede al dashboard

**Cambiar contraseña:**
- Edita el archivo `script.js`
- Busca la función `accessCEO()`
- Cambia `'1234'` por tu nueva contraseña

---

## 📈 Métricas Disponibles

### Estadísticas Principales

#### 💰 Ingresos Totales
- Suma de todos los pedidos realizados
- Ticket promedio por orden
- **Actualización:** Tiempo real

#### 📦 Pedidos Completados
- Total de pedidos enviados por WhatsApp
- Historial completo de órdenes
- **Tracking:** Automático al hacer click en "Quiero pedir"

#### 👁️ Visitas Totales
- Cada vez que alguien carga la página
- Visitantes únicos por sesión
- **Actualización:** Automática

#### 📱 Clicks en WhatsApp
- Todos los clicks en botones de WhatsApp
- Enlaces de productos individuales
- Botón flotante principal
- **Tracking:** Todos los enlaces wa.me

#### 📊 Tasa de Conversión
- Porcentaje de visitantes que hacen pedidos
- Cálculo: (Pedidos / Visitantes Únicos) × 100
- **Actualización:** En tiempo real

---

## 📊 Gráficos Disponibles

### 1. 📈 Evolución de Ventas (Últimos 7 días)
- Gráfico de línea con ingresos diarios
- Permite ver tendencias semanales
- **Actualización:** Diaria

### 2. 🍔 Productos Más Vendidos
- Top 5 productos por cantidad
- Gráfico de barras horizontal
- **Actualización:** Tiempo real

### 3. 👥 Vistas vs Conversiones
- Gráfico circular (doughnut)
- Muestra cuántos visitantes compran
- **Actualización:** Automática

### 4. 📊 Crecimiento Semanal
- Ingresos acumulados en el tiempo
- Muestra proyección de crecimiento
- Últimos 14 días
- **Actualización:** Diaria

---

## 📋 Tabla de Productos

Muestra información detallada de cada producto:

| Campo | Descripción |
|-------|-------------|
| **Producto** | Nombre del combo/item |
| **Precio** | Valor unitario |
| **Veces Agregado** | Cuántas veces fue al carrito |
| **Ingreso Total** | Precio × Cantidad |
| **Popularidad** | Barra visual comparativa |

---

## 🛠️ Funciones Disponibles

### 🔄 Actualizar
- Recarga todas las métricas
- No requiere refrescar página
- **Uso:** Click en botón "Actualizar"

### 💾 Exportar Datos
- Descarga archivo JSON con todas las métricas
- Formato: `elpasaje-metrics-YYYY-MM-DD.json`
- **Uso:** Para análisis externo, backups

### 🏠 Ir al Sitio
- Regresa a la página principal
- **Uso:** Click en "Ir al Sitio"

### 🗑️ Resetear Métricas
- ⚠️ **CUIDADO:** Borra TODOS los datos
- No se puede deshacer
- **Requiere contraseña:** `1234`
- **Requiere confirmación adicional** después de la contraseña
- **Uso:** Solo para testing o inicio de temporada

---

## 🔍 Cómo se Recopilan los Datos

### Visitas de Página
- **Trigger:** Al cargar index.html
- **Datos guardados:** Timestamp, sesión única
- **Almacenamiento:** localStorage + sessionStorage

### Clicks en WhatsApp
- **Trigger:** Click en cualquier enlace wa.me
- **Datos capturados:** Mensaje, producto, timestamp
- **Método:** Event listener en todos los enlaces

### Items del Carrito
- **Trigger:** Click en botón "+" de cualquier producto
- **Datos:** Nombre, precio, cantidad
- **Actualización:** Cada vez que se agrega

### Pedidos Completos
- **Trigger:** Click en "Quiero pedir" del carrito
- **Datos capturados:**
  - Lista de productos con cantidades
  - Total del pedido
  - Timestamp exacto
- **Parsing:** Automático del mensaje WhatsApp

---

## 💾 Almacenamiento de Datos

### Ubicación
Los datos se guardan en **localStorage** del navegador:
- Clave: `elpasaje_metrics`
- Formato: JSON
- Persistencia: Hasta que se limpie el navegador

### Estructura de Datos
```json
{
  "totalViews": 150,
  "uniqueVisitors": 87,
  "whatsappClicks": 45,
  "orderHistory": [
    {
      "timestamp": "2026-03-01T10:30:00.000Z",
      "products": [
        { "name": "Burger SABROSA", "quantity": 2, "price": 26400 }
      ],
      "total": 26400
    }
  ],
  "dailyStats": {
    "2026-03-01": {
      "views": 50,
      "whatsappClicks": 15,
      "cartAdds": 25,
      "orders": 8,
      "revenue": 150000
    }
  },
  "productStats": {
    "Burger SABROSA": {
      "name": "Burger SABROSA",
      "price": 13200,
      "timesAdded": 25,
      "totalRevenue": 330000
    }
  }
}
```

---

## ⚡ Tips de Uso

### Monitoreo Diario
1. Abrir dashboard por la mañana
2. Revisar ingresos del día anterior
3. Identificar productos más vendidos
4. Ajustar stock según demanda

### Análisis Semanal
1. Exportar datos el domingo
2. Comparar con semana anterior
3. Identificar días de mayor venta
4. Planificar promociones

### Optimización
1. Productos con baja popularidad → Revisar precios o descripción
2. Alta conversión → Mantener estrategia
3. Muchas vistas pero pocas ventas → Mejorar CTAs

---

## 🔒 Seguridad

### Acceso
- **Contraseña requerida** desde el sitio web: `1234`
- Acceso directo por URL no requiere autenticación
- Punto de acceso prácticamente invisible (transparencia 99%)
- Sin tooltip para mayor discreción

### Cambiar Contraseña
1. Abre `script.js`
2. Localiza la función `accessCEO()`
3. Modifica la línea: `if (password === '1234')`
4. Reemplaza `'1234'` con tu nueva contraseña
5. Guarda el archivo

### Respaldo de Datos
**Recomendación:** Exportar datos semanalmente
- Click en "Exportar Datos"
- Guardar archivo JSON en carpeta segura
- Permite restaurar si se borra historial del navegador

---

## 🐛 Solución de Problemas

### No se ven datos
- **Causa:** No ha habido actividad en el sitio
- **Solución:** Navega por index.html, agrega productos, haz un pedido de prueba

### Los gráficos no cargan
- **Causa:** Chart.js no cargó
- **Solución:** Verifica conexión a internet (usa CDN)

### Los datos se borraron
- **Causa:** Se limpió localStorage del navegador
- **Solución:** Restaurar desde backup JSON exportado

### Métricas desfasadas
- **Solución:** Click en botón "🔄 Actualizar"

---

## 📞 Soporte

Para consultas sobre el dashboard:
- Revisar este README primero
- Verificar consola del navegador (F12) para errores
- Los datos se actualizan automáticamente, no hace falta refrescar constantemente

---

**Última actualización:** Marzo 2026
**Versión:** 1.0
**Desarrollado para:** El Pasaje Food
