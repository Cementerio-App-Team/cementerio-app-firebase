🛠️ Setup Inicial del Proyecto Cementerio App Firebase

Este documento describe los pasos realizados para configurar el entorno inicial del proyecto **cementerio-app-firebase**.  
Permite replicar la configuración en caso de que nuevos colaboradores se unan.

1️⃣ Creación del repositorio en GitHub

- Nombre: `cementerio-app-firebase`
- Incluye:
  - `README.md` inicial
  - `.gitignore` para Node.js
  - Licencia MIT (opcional)
- Rama principal: `main`
- Rama de desarrollo: `dev`

2️⃣ Creación del proyecto con Vite + React + TypeScript
bash
npm create vite@latest

# Nombre del proyecto: cementerio-app

# Framework: React

# Lenguaje: TypeScript

3️⃣ Instalación y configuración de TailwindCSS
Instalar dependencias:

bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Editar tailwind.config.js para que contenga:

export default {
content: [
"./index.html",
"./src/**/*.{js,ts,jsx,tsx}",
],
theme: {
extend: {},
},
plugins: [],
}

Editar src/index.css para incluir:

css

@tailwind base;
@tailwind components;
@tailwind utilities;

4️⃣ Configuración de Firebase
Crear proyecto en Firebase Console.

Añadir aplicación web.

Copiar configuración de Firebase (API Key, etc.).

Instalar SDK:

bash

npm install firebase

Crear archivo src/firebase.config.ts:

import { initializeApp } from "firebase/app";

const firebaseConfig = {
apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
appId: import.meta.env.VITE_FIREBASE_APP_ID
};

export const app = initializeApp(firebaseConfig);

5️⃣ Variables de entorno
Crear .env (no se sube a GitHub):

env

VITE_FIREBASE_API_KEY=TU_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=TU_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=TU_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=TU_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=TU_SENDER_ID
VITE_FIREBASE_APP_ID=TU_APP_ID

Crear .env.example (sí se sube):

env

VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

Asegúrate de que .env esté en .gitignore.

6️⃣ Flujo de trabajo con Git
Trabajar siempre en la rama dev:

bash

git checkout -b dev
git push -u origin dev
Hacer cambios → git add . → git commit -m "mensaje" → git push.
