import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { Link } from "react-router-dom";
import { app } from "../../firebase.config";

export default function HomeHeader() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth(app);
    const unsub = onAuthStateChanged(auth, setUser);
    return () => unsub();
  }, []);

  // estilo "etiqueta/píldora" (fallback aunque Tailwind no cargue)
  const chipStyle = {
    display: "inline-block",
    padding: "6px 12px",
    border: "1px solid #d1d5db",
    borderRadius: "9999px",
    fontSize: "0.875rem",
    textDecoration: "none",
    color: "#111827",
    background: "#ffffff",
  };

  return (
    <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-base sm:text-lg font-semibold tracking-tight">
          CementerioApp
        </h1>

        {user ? (
          <div className="text-sm text-gray-700">
            Hola, <strong>{user.displayName || user.email}</strong>
          </div>
        ) : (
          <div
            className="flex items-center"
            style={{ display: "flex", gap: 12 }} // separación garantizada
          >
            <Link to="/login" style={chipStyle}>
              Iniciar sesión
            </Link>
            <Link to="/register" style={chipStyle}>
              Registrarse
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
