# 🚀 Guía de Deployment - El Pasaje Food

Esta guía te ayudará a subir el proyecto a GitHub y desplegarlo en Hostinger con sincronización automática.

---

## 📦 PASO 1: Crear Repositorio en GitHub

### Opción A: Desde la Web de GitHub (Recomendado)

1. **Ir a GitHub**
   ```
   https://github.com/new
   ```

2. **Configurar el repositorio:**
   - **Repository name:** `el-pasaje-food`
   - **Description:** Landing page para El Pasaje Food - Hamburguesas Artesanales
   - **Visibility:** 
     - ✅ **Private** (recomendado para sitios comerciales)
     - ⚪ Public (si quieres que el código sea visible)
   - ❌ **NO** inicializar con README (ya tenemos uno)
   - ❌ **NO** agregar .gitignore (ya tenemos uno)
   - ❌ **NO** agregar licencia

3. **Click en "Create repository"**

4. **Copiar la URL del repositorio** que aparece en pantalla:
   ```
   https://github.com/TU-USUARIO/el-pasaje-food.git
   ```

### Opción B: Desde GitHub CLI (si la tienes instalada)

```bash
gh repo create el-pasaje-food --private --source=. --remote=origin --push
```

---

## 🔗 PASO 2: Conectar Git Local con GitHub

Abre PowerShell en el directorio del proyecto y ejecuta:

```bash
# Navegar al directorio (si no estás ahí)
cd C:\Users\Public\el-pasaje-food

# Cambiar el nombre de la rama a 'main' (GitHub usa 'main' por defecto)
git branch -M main

# Agregar el remote de GitHub (reemplaza TU-USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/el-pasaje-food.git

# Verificar que se agregó correctamente
git remote -v
```

**Deberías ver:**
```
origin  https://github.com/TU-USUARIO/el-pasaje-food.git (fetch)
origin  https://github.com/TU-USUARIO/el-pasaje-food.git (push)
```

---

## ⬆️ PASO 3: Push Inicial a GitHub

```bash
# Hacer push del código
git push -u origin main
```

**Si te pide autenticación:**

1. **Username:** Tu nombre de usuario de GitHub
2. **Password:** Ya no puedes usar tu contraseña normal. Necesitas un **Personal Access Token**

### Crear Personal Access Token (si no tienes uno):

1. Ir a: https://github.com/settings/tokens
2. Click en "Generate new token" → "Generate new token (classic)"
3. **Note:** "El Pasaje Food Deploy"
4. **Expiration:** 90 días (o el que prefieras)
5. **Scopes:** Seleccionar:
   - ✅ `repo` (todos los sub-items)
6. Click en "Generate token"
7. **⚠️ COPIAR EL TOKEN** (solo lo verás una vez)
8. Usar ese token como contraseña cuando Git lo pida

### Alternativa: Usar GitHub Desktop

Si prefieres interfaz gráfica:
1. Descargar: https://desktop.github.com/
2. Instalar y hacer login
3. File → Add Local Repository
4. Seleccionar: `C:\Users\Public\el-pasaje-food`
5. Publish repository

---

## 🌐 PASO 4: Deployment en Hostinger

### Método 1: File Manager (Más Fácil)

1. **Login en Hostinger**
   ```
   https://hpanel.hostinger.com
   ```

2. **Ir a File Manager**
   - Panel → Archivos → Administrador de archivos
   - O desde el panel de tu hosting

3. **Navegar a la carpeta correcta:**
   - Si tienes dominio propio: `domains/tu-dominio.com/public_html`
   - Si usas subdominio temporal: `public_html`

4. **Limpiar carpeta (si hay contenido antiguo):**
   - Seleccionar todos los archivos
   - Click en "Eliminar"

5. **Subir archivos:**
   - Click en "Subir archivos"
   - Seleccionar TODOS los archivos del proyecto:
     ```
     ✅ index.html
     ✅ dashboard.html
     ✅ styles.css
     ✅ script.js
     ✅ chatbot.js
     ✅ cart.js
     ✅ pwa.js
     ✅ tracking.js
     ✅ manifest.json
     ✅ service-worker.js
     ✅ .gitignore (opcional)
     ✅ Todos los archivos .md (opcional)
     ✅ ACCESO-CEO.txt (opcional)
     ```
   - Arrastrar y soltar en el File Manager
   - Esperar a que termine la carga

6. **Verificar permisos:**
   - Archivos HTML/CSS/JS deben tener permiso **644**
   - Si no es así, click derecho → Permisos → Cambiar a 644

### Método 2: FTP (Para Actualizaciones Frecuentes)

1. **Obtener credenciales FTP en Hostinger:**
   - Panel → Archivos → Cuentas FTP
   - Copiar:
     - Host: `ftp.tu-dominio.com`
     - Usuario: `u123456789` (o similar)
     - Puerto: `21`
     - Contraseña: (la que configuraste)

2. **Usar cliente FTP:**
   - **FileZilla** (gratuito): https://filezilla-project.org/
   - Instalar FileZilla
   - Archivo → Gestor de sitios → Nuevo sitio
   - Pegar credenciales FTP
   - Conectar

3. **Subir archivos:**
   - Panel izquierdo: Navegar a `C:\Users\Public\el-pasaje-food`
   - Panel derecho: Navegar a `public_html`
   - Seleccionar todos los archivos locales
   - Arrastrar al panel derecho

### Método 3: Git Deployment (Avanzado)

**⚠️ Hostinger Premium/Business solamente**

1. **Conectar SSH:**
   ```bash
   ssh u123456789@tu-dominio.com
   ```

2. **Navegar a carpeta web:**
   ```bash
   cd public_html
   ```

3. **Clonar repositorio:**
   ```bash
   git clone https://github.com/TU-USUARIO/el-pasaje-food.git .
   ```

4. **Para actualizar en el futuro:**
   ```bash
   git pull origin main
   ```

---

## 🔗 PASO 5: Configurar Dominio Temporal (si no tienes dominio)

1. **Ir a Panel Hostinger**
   - Dominios → Crear subdominio

2. **Crear subdominio:**
   - Nombre: `pasaje` (o el que quieras)
   - Dominio base: Seleccionar el que te dio Hostinger (ej: `000webhostapp.com`)
   - Resultado: `pasaje.000webhostapp.com`

3. **Apuntar a carpeta:**
   - Document root: `/public_html`

4. **Guardar cambios**

5. **Esperar propagación** (5-10 minutos)

---

## ✅ PASO 6: Verificación Post-Deploy

### 1. Probar Sitio Principal

```
https://tu-dominio.com
```

**Verificar:**
- ✅ Hero section carga correctamente
- ✅ Carrusel se anima automáticamente
- ✅ Botones flotantes (Pedí Ya, WhatsApp, Carrito) visibles
- ✅ Chatbot responde al hacer click
- ✅ Agregar productos al carrito funciona
- ✅ Botón "Quiero pedir" abre WhatsApp con el pedido

### 2. Probar Dashboard CEO

```
https://tu-dominio.com/dashboard.html
```

**O desde el sitio principal:**
- Ir al footer
- Click en el punto casi invisible antes de "©2026"
- Ingresar contraseña: `1234`

**Verificar:**
- ✅ Dashboard carga con gráficos
- ✅ Botón "Actualizar" funciona
- ✅ Botón "Exportar JSON" descarga archivo
- ✅ Función "Resetear" pide contraseña

### 3. Probar PWA (Instalación)

**En Chrome Android:**
1. Abrir el sitio
2. Menú (3 puntos) → "Instalar aplicación"
3. Confirmar instalación
4. Ver icono en pantalla de inicio

**En Chrome Desktop:**
1. Abrir el sitio
2. Barra de direcciones → Icono de instalación (+)
3. Click en "Instalar"

### 4. Probar Analytics

1. Navegar por el sitio
2. Agregar productos al carrito
3. Hacer un pedido de prueba
4. Ir al dashboard
5. Verificar que se registraron las acciones

---

## 🔄 PASO 7: Sincronización GitHub ↔ Hostinger

### Opción A: Manual (Recomendada para empezar)

**Cuando hagas cambios locales:**

```bash
# 1. Guardar cambios en Git
git add .
git commit -m "Descripción del cambio"

# 2. Subir a GitHub
git push origin main

# 3. Subir a Hostinger via FTP o File Manager
# (Repetir Paso 4 - Método 1 o 2)
```

### Opción B: Automática (GitHub Actions)

**⚠️ Requiere configuración avanzada**

Crear archivo: `.github/workflows/deploy.yml`

```yaml
name: Deploy to Hostinger

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Deploy via FTP
        uses: SamKirkland/FTP-Deploy-Action@4.3.0
        with:
          server: ftp.tu-dominio.com
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          server-dir: /public_html/
```

**Configurar secrets en GitHub:**
1. Repo → Settings → Secrets and variables → Actions
2. New repository secret:
   - `FTP_USERNAME`: tu usuario FTP
   - `FTP_PASSWORD`: tu contraseña FTP

---

## 📱 PASO 8: Configurar HTTPS (SSL)

**Muy importante para PWA y seguridad**

1. **En Hostinger Panel:**
   - SSL → Gestionar SSL
   
2. **Seleccionar dominio**

3. **Instalar SSL gratuito (Let's Encrypt):**
   - Click en "Instalar SSL"
   - Esperar 5-10 minutos

4. **Forzar HTTPS:**
   - Crear archivo `.htaccess` en `public_html`:

```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

5. **Verificar:**
   - Ir a `http://tu-dominio.com` (sin S)
   - Debería redirigir a `https://tu-dominio.com`

---

## 🎯 Resumen del Flujo Completo

```
LOCAL → GIT → GITHUB → HOSTINGER → PRODUCCIÓN
  ↓       ↓      ↓         ↓           ↓
Editar  Commit Push     Upload    https://
código                  FTP       tu-dominio
```

### Workflow Diario:

```bash
# 1. Hacer cambios en los archivos
# 2. Guardar en Git
git add .
git commit -m "Mejora en el carrito"
git push origin main

# 3. Subir a Hostinger via FileZilla FTP
# (O via File Manager si son pocos archivos)
```

---

## 🆘 Solución de Problemas

### Git pide usuario/contraseña cada vez

**Solución: Guardar credenciales**
```bash
git config --global credential.helper store
```
(La próxima vez que hagas push, se guardarán)

### Error: "Permission denied" en Hostinger

**Solución:**
- Verificar permisos de archivos (644)
- Verificar permisos de carpetas (755)
- En File Manager: Click derecho → Permisos

### El sitio no carga, error 403

**Solución:**
- Asegurarte de que `index.html` esté en la raíz de `public_html`
- Verificar que el archivo se llame exactamente `index.html` (minúsculas)

### Dashboard no guarda métricas

**Solución:**
- Las métricas se guardan en `localStorage` del navegador
- Si cambias de navegador/dispositivo, no verás las mismas
- Para métricas persistentes, necesitarías base de datos

### PWA no se instala

**Solución:**
- El sitio DEBE estar en HTTPS
- Instalar certificado SSL (Paso 8)
- Verificar que `manifest.json` y `service-worker.js` sean accesibles

### Cambios no se reflejan en el sitio

**Solución:**
- Limpiar caché del navegador (Ctrl + Shift + R)
- Verificar que subiste el archivo correcto
- Esperar 1-2 minutos por caché del servidor

---

## 📞 Comandos Útiles

### Git Básico
```bash
git status                    # Ver estado actual
git log --oneline            # Ver historial de commits
git diff                     # Ver cambios sin guardar
git checkout -- archivo.js   # Deshacer cambios en un archivo
```

### Hostinger SSH
```bash
ssh u123456789@dominio.com   # Conectar
ls -la                       # Listar archivos
pwd                          # Ver directorio actual
cd public_html               # Ir a carpeta web
nano index.html              # Editar archivo
```

---

## ✅ Checklist Final

Antes de considerar el deployment completo:

- [ ] Repositorio creado en GitHub
- [ ] Código pusheado correctamente (`git log` muestra commits)
- [ ] Archivos subidos a Hostinger (visibles en File Manager)
- [ ] Sitio accesible desde navegador (`https://tu-dominio.com`)
- [ ] SSL/HTTPS funcionando (candado verde en navegador)
- [ ] Dashboard accesible con contraseña
- [ ] PWA instalable desde mobile
- [ ] WhatsApp abre correctamente con el número +54 9 221 5047962
- [ ] Carrito funciona y calcula totales
- [ ] Chatbot responde
- [ ] Analytics capturando datos

---

**🎉 ¡Listo! Tu sitio está en producción.**

Para cualquier actualización futura:
1. Editas archivos localmente
2. `git add . && git commit -m "cambio"`
3. `git push origin main`
4. Subes a Hostinger via FTP

---

**Última actualización:** 1 de marzo de 2026
