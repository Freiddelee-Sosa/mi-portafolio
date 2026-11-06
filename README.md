# 🌟 Portafolio Profesional de Freiddelee Sosa
### Frontend Developer & Estudiante de Informática @ UCLA (Barquisimeto)

Un portafolio web moderno, dinámico y 100% responsivo desarrollado con las tecnologías web fundamentales: **HTML5 semántico, CSS3 moderno y Vanilla JavaScript**.

---

## 🚀 Características Principales

- **Diseño Dinámico & Moderno**:
  - Modo Oscuro (Dark Mode) y Modo Claro (Light Mode) con persistencia en `localStorage`.
  - Fondo animado de partículas interactivo en Vanilla JS (`canvas`).
  - Efecto de escritura dinámica (Typing Effect) en el Hero.
  - Micro-interacciones y animaciones CSS fluidas.
  - Modales emergentes para ver detalles de los proyectos.
  - Filtros dinámicos de proyectos por categoría.
  - Contador animado de métricas al hacer scroll.
- **100% Adaptable (Responsive)**:
  - Diseñado tanto para teléfonos inteligentes (smartphones) como para tablets y laptops de alta resolución.
  - Menú hamburguesa interactivo para dispositivos móviles.
- **Enfocado en tu Perfil**:
  - Especialidad en Frontend (HTML, CSS, JavaScript).
  - Referencias académicas a la **Universidad Centroccidental Lisandro Alvarado (UCLA)** de Barquisimeto.
- **Formulario de Contacto & Botones Directos**:
  - Validación de campos en tiempo real.
  - Botón de "Copiar Correo" con notificación Toast inmediata.

---

## 📁 Estructura del Proyecto

```text
mi portafolio/
│
├── index.html               # Estructura principal y semántica
├── README.md                # Guía de uso y despliegue en Render
│
├── css/
│   ├── style.css            # Estilos principales, variables y diseño responsive
│   └── animations.css       # Animaciones CSS keyframes (flotado, brillo, pulso)
│
├── js/
│   ├── particles.js         # Canvas interactivo de partículas
│   ├── projects-data.js     # Base de datos y lista de proyectos
│   └── main.js              # Controlador interactivo (filtros, temas, modal, formulario)
│
└── assets/
    └── images/              # Ilustraciones SVG estilizadas y avatar de perfil
        ├── avatar.svg
        ├── project-1.svg
        ├── project-2.svg
        ├── project-3.svg
        └── project-4.svg
```

---

## 🌐 Cómo Subir y Desplegar tu Portafolio en Render (Paso a Paso)

Render permite alojar sitios web estáticos (**Static Sites**) de manera completamente **gratuita**, con certificado SSL (HTTPS) incluido y despliegue automático.

### Paso 1: Subir tus archivos a GitHub
1. Si aún no tienes una cuenta en [GitHub](https://github.com), regístrate gratis.
2. Crea un nuevo repositorio en GitHub (por ejemplo: `mi-portafolio`).
3. Abre una terminal en la carpeta de tu portafolio y sube el código:
   ```bash
   git init
   git add .
   git commit -m "Mi primer portafolio web profesional"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/mi-portafolio.git
   git push -u origin main
   ```

### Paso 2: Crear el servicio en Render
1. Ve a [Render.com](https://render.com) e inicia sesión con tu cuenta de GitHub.
2. En el panel principal (Dashboard), haz clic en el botón azul **"New +"** (Nuevo).
3. Selecciona la opción **"Static Site"** (Sitio Estático).
4. Conecta tu repositorio de GitHub recién creado (`mi-portafolio`).
5. Configura los siguientes campos:
   - **Name**: `freiddelee-sosa` (o el nombre que prefieras para tu enlace).
   - **Branch**: `main`.
   - **Build Command**: *Déjalo en blanco / vacío* (no es necesario porque es HTML/CSS/JS puro).
   - **Publish Directory**: `.` (escribe un punto, lo cual indica la carpeta raíz donde está `index.html`).
6. Haz clic en **"Create Static Site"**.

¡Listo! En menos de 1 minuto, Render te dará un enlace público como:
`https://freiddelee-sosa.onrender.com` con el que cualquier reclutador o colega podrá ver tu trabajo.

---

## 🛠️ Personalización Rápida

- **Modificar tus proyectos**: Abre el archivo `js/projects-data.js` y puedes cambiar títulos, descripciones, tecnologías o enlaces a tus repositorios reales.
- **Cambiar tu correo o datos de contacto**: En `index.html` busca `freiddeleesosa@gmail.com` y cámbialo por tus datos de preferencia.

