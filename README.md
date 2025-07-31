# cementerio-app-firebase

# 🪦 CementerioApp – Buscador de personas enterradas

Aplicación web desarrollada con React + Firebase para facilitar la consulta de información sobre personas enterradas en un cementerio local. Pensada para ser utilizada desde dispositivos móviles y web, incluso instalable como PWA.

---

## 🚀 Tecnologías utilizadas

- ⚛️ React + Vite + TypeScript
- 🎨 TailwindCSS
- 🔥 Firebase (Auth, Firestore)
- 📦 Git + GitHub
- 🌐 PWA (Progressive Web App, próximamente)
- ☁️ Vercel / Firebase Hosting (para despliegue)

---

## 🎯 Funcionalidades previstas

- Registro e inicio de sesión con email y contraseña
- Buscador por nombre y apellido
- Filtros por tipo de sepultura, sección, fecha
- Página pública de resultados
- Vista de detalle de cada registro
- Panel de administración (CRUD completo)
- Acceso seguro con rutas protegidas
- Instalación como app móvil (PWA)

---

## 🛠️ Instalación y ejecución local

1. Clona este repositorio:

    git clone https://github.com/LauGL/cementerio-app-firebase.git

2. Instala las dependencias:

      cd cementerio-app
      npm install

Crea un archivo .env con tus claves de Firebase:

    VITE_FIREBASE_API_KEY=...
    VITE_FIREBASE_AUTH_DOMAIN=...
    VITE_FIREBASE_PROJECT_ID=...
    VITE_FIREBASE_STORAGE_BUCKET=...
    VITE_FIREBASE_MESSAGING_SENDER_ID=...
    VITE_FIREBASE_APP_ID=...

4. Ejecuta el servidor de desarrollo:

    npm run dev


🗂️ Organización del proyecto

    src/components: Componentes reutilizables (formularios, tarjetas, etc.)
    
    src/pages: Páginas principales (Login, Panel, Resultados)
    
    src/services: Conexión a Firebase (Auth y Firestore)
    
    src/hooks: Hooks personalizados (uso de auth, datos, etc.)
    
    firebase.config.ts: Configuración del proyecto Firebase

🗃️ Tareas y progreso

    Puedes seguir el avance del proyecto en nuestro tablero de tareas en GitHub Projects:
    🔗 https://github.com/users/LauGL/projects/1

👥 Autores

  Laura [@LauGL] – Fullstack Developer | Idea, arquitectura y desarrollo
  Cristian [Cris300390] – Fullstack Developer | Idea, arquitectura y desarrollo

📄 Licencia
  MIT © 2025



