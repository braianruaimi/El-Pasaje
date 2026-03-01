# 🚀 Comandos Rápidos - Deployment El Pasaje Food

## ✅ YA COMPLETADO

```bash
✅ git init
✅ git add .
✅ git commit -m "Initial commit: Landing page El Pasaje Food con PWA, carrito, chatbot y dashboard CEO"
```

---

## 📝 SIGUIENTE: Conectar con GitHub

### 1. Crear repo en GitHub (hazlo desde la web):
```
https://github.com/new

Nombre: el-pasaje-food
Visibilidad: Private (recomendado)
❌ NO inicializar con README
❌ NO agregar .gitignore
❌ NO agregar licencia
```

### 2. Copiar estos comandos y ejecutar (REEMPLAZA TU-USUARIO):

```bash
# Cambiar rama a main
git branch -M main

# Agregar remote (REEMPLAZA TU-USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/el-pasaje-food.git

# Verificar
git remote -v

# Push inicial
git push -u origin main
```

**Si te pide contraseña:**
- NO uses tu contraseña de GitHub (ya no funciona)
- USA un Personal Access Token:
  1. Ir a: https://github.com/settings/tokens
  2. Generate new token (classic)
  3. Seleccionar scope: "repo"
  4. Copiar el token
  5. Usarlo como contraseña

---

## 🌐 HOSTINGER: Subir Archivos

### Opción 1: File Manager (más fácil)

1. Ir a: https://hpanel.hostinger.com
2. Archivos → Administrador de archivos
3. Navegar a: `public_html`
4. Subir TODOS estos archivos:
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
   ```

### Opción 2: FTP con FileZilla

1. Descargar FileZilla: https://filezilla-project.org/
2. Obtener credenciales FTP en Hostinger:
   - Panel → Archivos → Cuentas FTP
3. Conectar en FileZilla:
   - Host: `ftp.tu-dominio.com`
   - Usuario: (lo que te da Hostinger)
   - Contraseña: (la que configuraste)
   - Puerto: 21
4. Arrastrar archivos de local a `public_html`

---

## ✅ Verificar que funciona

```
https://tu-dominio.com              → Sitio principal
https://tu-dominio.com/dashboard.html → Dashboard CEO
```

---

## 🔄 Workflow futuro (cuando hagas cambios):

```bash
# 1. Guardar cambios en Git
git add .
git commit -m "Descripción del cambio"
git push origin main

# 2. Subir a Hostinger
# (Via File Manager o FTP - repetir pasos de arriba)
```

---

## 🆘 Problemas comunes

### "fatal: unable to access 'https://github.com/...': Could not resolve host: github.com"
→ Verifica tu conexión a internet

### "remote: Permission to TU-USUARIO/el-pasaje-food.git denied"
→ Verifica que el nombre de usuario sea correcto
→ Usa Personal Access Token como contraseña, NO tu contraseña de GitHub

### "fatal: repository 'https://github.com/TU-USUARIO/el-pasaje-food.git/' not found"
→ Primero crea el repositorio en GitHub (paso 1)

### El sitio muestra error 403
→ Asegúrate de que index.html esté en public_html (no en subcarpeta)

### El sitio no carga estilos
→ Verifica que todos los archivos .css y .js se hayan subido
→ Limpia caché del navegador (Ctrl + Shift + R)

---

## 📞 Información del Proyecto

- **Directorio local:** `C:\Users\Public\el-pasaje-food\`
- **Archivos totales:** 17
- **Líneas de código:** 5,832
- **Contraseña dashboard:** `1234`
- **WhatsApp:** +54 9 221 5047962

---

**Última actualización:** 1 de marzo de 2026
