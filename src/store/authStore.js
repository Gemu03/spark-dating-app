import create from "zustand";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, googleProvider } from "../lib/firebase";
import { getProfile } from "../lib/firestore";

// paso los codigos crudos de firebase a mensajes que una persona entienda
function friendlyError(code) {
  const map = {
    "auth/invalid-email": "El correo no es válido.",
    "auth/user-not-found": "No existe una cuenta con ese correo.",
    "auth/wrong-password": "Contraseña incorrecta.",
    "auth/invalid-credential": "Correo o contraseña incorrectos.",
    "auth/email-already-in-use": "Ya existe una cuenta con ese correo.",
    "auth/weak-password": "La contraseña debe tener al menos 6 caracteres.",
    "auth/popup-closed-by-user": "Cerraste la ventana antes de terminar.",
  };
  return map[code] || "Algo salió mal, intenta de nuevo.";
}

export const useAuthStore = create((set, get) => ({
  user: null, // usuario de firebase auth
  profile: null, // documento de tinder_profiles
  initializing: true,
  error: null,
  busy: false,

  init: () => {
    onAuthStateChanged(auth, async (user) => {
      let profile = null;
      if (user) {
        try {
          profile = await getProfile(user.uid);
        } catch (err) {
          console.error("No se pudo cargar el perfil", err);
        }
      }
      set({ user, profile, initializing: false });
    });
  },

  // se llama tras crear/editar el perfil para refrescar el estado
  refreshProfile: async () => {
    const user = get().user;
    if (!user) return;
    const profile = await getProfile(user.uid);
    set({ profile });
  },

  loginEmail: async (email, password) => {
    set({ busy: true, error: null });
    try {
      await signInWithEmailAndPassword(auth, email, password);
      set({ busy: false });
    } catch (err) {
      set({ busy: false, error: friendlyError(err.code) });
      throw err;
    }
  },

  registerEmail: async (name, email, password) => {
    set({ busy: true, error: null });
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (name) await updateProfile(cred.user, { displayName: name });
      set({ busy: false });
    } catch (err) {
      set({ busy: false, error: friendlyError(err.code) });
      throw err;
    }
  },

  loginGoogle: async () => {
    set({ busy: true, error: null });
    try {
      await signInWithPopup(auth, googleProvider);
      set({ busy: false });
    } catch (err) {
      set({ busy: false, error: friendlyError(err.code) });
      throw err;
    }
  },

  logout: async () => {
    await signOut(auth);
    set({ profile: null });
  },

  clearError: () => set({ error: null }),
}));
