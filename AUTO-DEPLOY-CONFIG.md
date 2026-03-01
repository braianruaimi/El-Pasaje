# 🔄 Configuración de Despliegue Automático con GitHub Actions

## 📋 Resumen
Cada vez que hagas `git push` a GitHub, tu sitio se actualizará automáticamente en el servidor. **Cambios en tiempo real sin intervención manual.**

---

## 🎯 Paso 1: Obtener Credenciales SSH de tu Hosting

### Accede a tu panel de hosting (cPanel, Plesk, Hostinger, etc.) y obtén:

#### 1. **SSH_HOST** (Dirección del servidor)
- Ejemplo: `server123.tuhosting.com` o `192.168.1.100`
- Lo encuentras en: **cPanel → SSH Access** o información de cuenta

#### 2. **SSH_USERNAME** (Tu usuario SSH)
- Ejemplo: `tuusuario` o `tu-dominio-com`
- Generalmente es el mismo que tu usuario de cPanel

#### 3. **SSH_PASSWORD** (Contraseña SSH)
- Tu contraseña de cPanel/hosting
- **Alternativa:** Puedes usar clave SSH (más seguro)

#### 4. **SSH_PORT** (Puerto SSH)
- Por defecto: `22`
- Algunos hostings usan: `2222` o `21098`
- Lo encuentras en: **cPanel → SSH Access**

#### 5. **DEPLOY_PATH** (Ruta del sitio web)
- Ejemplo: `/home/tuusuario/public_html`
- Ejemplo 2: `/home/tuusuario/domains/tu-dominio.com/public_html`
- Lo encuentras en: **cPanel → File Manager** (mira la ruta actual)

---

## 🔐 Paso 2: Configurar Secretos en GitHub

### Ve a tu repositorio en GitHub:
1. **https://github.com/braianruaimi/El-Pasaje**
2. Click en **Settings** (⚙️)
3. En el menú izquierdo: **Secrets and variables** → **Actions**
4. Click en **New repository secret**

### Crea estos 5 secretos (uno por uno):

| Nombre del Secreto | Valor | Ejemplo |
|-------------------|-------|---------|
| `SSH_HOST` | Tu servidor | `server123.hosting.com` |
| `SSH_USERNAME` | Tu usuario SSH | `miusuario` |
| `SSH_PASSWORD` | Tu contraseña | `tu_contraseña_segura` |
| `SSH_PORT` | Puerto SSH | `22` |
| `DEPLOY_PATH` | Ruta completa | `/home/miusuario/public_html` |

**⚠️ IMPORTANTE:** Los nombres deben ser EXACTAMENTE como se muestran (en mayúsculas).

---

## 🚀 Paso 3: Elegir Método de Despliegue

Tienes 2 opciones (elige una):

### **Opción A: Git Pull (Recomendada si tu hosting tiene Git instalado)**

```bash
# Prueba si tu servidor tiene Git:
ssh tuusuario@tuservidor.com
git --version
```

Si funciona, usa: `.github/workflows/deploy.yml`

**Configuración adicional necesaria:**
```bash
# Conéctate por SSH a tu servidor:
ssh tuusuario@tuservidor.com

# Ve a tu directorio web:
cd /home/tuusuario/public_html

# Clona el repositorio (solo la primera vez):
git clone https://github.com/braianruaimi/El-Pasaje.git .

# Configura Git:
git config --global user.email "tu@email.com"
git config --global user.name "Tu Nombre"
```

### **Opción B: RSYNC (Funciona en cualquier hosting con SSH)**

Usa: `.github/workflows/deploy-rsync.yml`

No requiere configuración adicional. ✅

---

## ✅ Paso 4: Activar el Workflow que Elegiste

### Si elegiste Opción A (Git Pull):
```bash
# En tu computadora:
cd C:\Users\Public\el-pasaje-food
Remove-Item .github\workflows\deploy-rsync.yml
git add .
git commit -m "Activar despliegue automático con Git"
git push
```

### Si elegiste Opción B (RSYNC):
```bash
# En tu computadora:
cd C:\Users\Public\el-pasaje-food
Remove-Item .github\workflows\deploy.yml
git add .
git commit -m "Activar despliegue automático con RSYNC"
git push
```

---

## 🧪 Paso 5: Probar el Despliegue

### 1. Haz un cambio de prueba:
```bash
# Edita cualquier archivo, por ejemplo index.html
# Luego:
git add .
git commit -m "Prueba de despliegue automático"
git push
```

### 2. Ve a GitHub:
- https://github.com/braianruaimi/El-Pasaje/actions
- Verás el workflow ejecutándose en tiempo real ⚙️
- En 1-2 minutos verás ✅ si fue exitoso

### 3. Verifica tu sitio:
- Visita: https://tu-dominio.com
- ¡Deberías ver los cambios! 🎉

---

## 📱 Flujo de Trabajo Diario

```bash
# 1. Haces cambios en tu código local
# (Editas index.html, style.css, etc.)

# 2. Guardas y subes a GitHub:
git add .
git commit -m "Descripción de los cambios"
git push

# 3. ¡GitHub Actions despliega automáticamente! ✨
# En 1-2 minutos, tu sitio está actualizado
```

---

## 🔧 Troubleshooting

### ❌ Error: "Permission denied (publickey)"
**Solución:**
- Verifica que `SSH_PASSWORD` esté correcto en GitHub Secrets
- O configura SSH Key (más seguro):

```bash
# En tu servidor:
ssh-keygen -t rsa -b 4096 -C "tu@email.com"
cat ~/.ssh/id_rsa

# Copia el contenido completo
# En GitHub Secrets crea: SSH_PRIVATE_KEY (con el contenido)
```

### ❌ Error: "fatal: not a git repository"
**Solución:**
Usa el método RSYNC (deploy-rsync.yml) en lugar de Git Pull.

### ❌ Error: "command not found: rsync"
**Solución:**
Usa el método Git Pull (deploy.yml) en lugar de RSYNC.

### ❌ El despliegue es exitoso pero no veo cambios
**Solución:**
- Limpia caché del navegador: `Ctrl + Shift + R`
- Verifica que `DEPLOY_PATH` sea correcto
- Revisa los archivos en tu servidor por SSH:
```bash
ssh tuusuario@tuservidor.com
cd /home/tuusuario/public_html
ls -la
```

---

## 🎓 Cómo Obtener tus Credenciales por Proveedor

### **cPanel (Hostinger, Bluehost, etc.)**
1. Inicia sesión en cPanel
2. Busca **"SSH Access"** o **"Terminal"**
3. Allí verás: Host, Username, Port
4. DEPLOY_PATH: `/home/TUUSUARIO/public_html`

### **Plesk**
1. Inicia sesión en Plesk
2. Ve a **"Websites & Domains"**
3. Click en **"Web Hosting Access"**
4. Allí verás las credenciales SSH
5. DEPLOY_PATH: `/var/www/vhosts/tu-dominio.com/httpdocs`

### **DirectAdmin**
1. Inicia sesión en DirectAdmin
2. Ve a **"SSH Keys"** o **"System Info"**
3. DEPLOY_PATH: `/home/TUUSUARIO/domains/tu-dominio.com/public_html`

---

## 🎉 ¡Listo!

Ahora cada vez que hagas `git push`, tu sitio se actualizará automáticamente en **1-2 minutos**. 

**Ventajas:**
- ✅ Sin FTP manual
- ✅ Sin copiar archivos uno por uno
- ✅ Historial completo de despliegues
- ✅ Puedes revertir cambios fácilmente
- ✅ Profesional y escalable

**¿Necesitas ayuda?** Revisa los logs en:
https://github.com/braianruaimi/El-Pasaje/actions
