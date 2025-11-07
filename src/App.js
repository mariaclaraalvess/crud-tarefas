import { useState, useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

import TaskForm from "./components/Formulario";
import TaskList from "./components/List";
import ThemeToggle from "./components/AlternarTema";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsub();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] p-6 transition">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-semibold text-[var(--purple)]">Minhas Tarefas</h1>
        <ThemeToggle />
      </header>

      {user ? (
        <main className="max-w-2xl mx-auto space-y-6">
          <TaskForm user={user} />
          <TaskList user={user} />
          <button
            onClick={() => signOut(auth)}
            className="mt-6 text-sm opacity-60 hover:opacity-100"
          >
            Sair
          </button>
        </main>
      ) : (
        <div className="text-center mt-20">
          <button
            onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
            className="px-4 py-2 rounded-lg bg-[var(--purple)] hover:bg-[var(--purpleDark)] transition text-white font-medium"
          >
            Entrar com Google
          </button>
        </div>
      )}

    </div>
  );
}
