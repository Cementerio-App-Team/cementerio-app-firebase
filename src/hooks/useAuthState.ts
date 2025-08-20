import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import "../firebase.config"; // asegura que Firebase esté inicializado (ajusta el path si tu archivo se llama distinto)

/**
 * Hook sencillo para conocer el usuario autenticado y el estado de carga.
 */
export default function useAuthState() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  return { user, loading };
}
