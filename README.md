# Tinder Clone

Clon funcional de Tinder hecho como aplicación full‑stack. No es una demo: el
registro, los swipes, los matches y el chat se guardan de verdad en la nube y
los usuarios reales aparecen entre sí en la pila de descubrimiento.

## Funcionalidades

- Registro e inicio de sesión con correo/contraseña y con Google (Firebase Auth).
- Onboarding para crear tu perfil (nombre, edad, ocupación, bio y foto).
- Pila de descubrimiento con tarjetas que se arrastran (swipe) como en el original,
  con sellos LIKE / NOPE y cambio de foto al tocar los lados.
- Matching real entre usuarios: si dos personas se dan like mutuo, hay match.
- Tres perfiles "semilla" (bots) que siempre están disponibles, hacen match al
  instante cuando los likeas y responden en el chat para que la app se sienta viva.
- Lista de matches y chat en tiempo real (Firestore `onSnapshot`).
- Perfil propio con opción de cerrar sesión.

## Stack

- Vite + React 18 + React Router 6
- Tailwind CSS
- lucide-react (iconos) y framer-motion (gestos y animaciones)
- Zustand para el estado
- Firebase: Authentication + Cloud Firestore

## Estructura

```
src/
  lib/        firebase.js (init) y firestore.js (perfiles, swipes, matches, chat)
  store/      authStore.js, deckStore.js
  data/       bots.js (perfiles semilla y respuestas)
  components/ SwipeCard, ActionButtons, MatchModal, ChatBubble, TopNav, ...
  pages/      Login, Onboarding, Discover, Matches, Chat, Profile
```

## Modelo de datos (Firestore)

- `tinder_profiles/{uid}` — perfil público, legible por cualquier usuario autenticado.
- `tinder_swipes/{uid}/likes/{targetUid}` — likes/nopes, privados de cada usuario.
- `tinder_matches/{matchId}` — un match entre dos usuarios (`matchId` = uids ordenados).
- `tinder_matches/{matchId}/messages/{msgId}` — mensajes del chat.

Las reglas de seguridad (`firestore.rules`) limitan cada documento a su dueño o a
los participantes del match.

## Desarrollo

```bash
npm install
cp .env.example .env   # rellena con las claves de tu proyecto Firebase
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Variables de entorno

Ver `.env.example`. Todas las claves son del SDK web de Firebase (`VITE_FIREBASE_*`).
