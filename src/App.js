import { useState, useEffect } from "react";
import TaskForm from "./components/Formulario";
import TaskList from "./components/List";
import ThemeToggle from "./components/AlternarTema";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState("dark");

  // Carrega tarefas do LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) setTasks(JSON.parse(saved));

    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("light", savedTheme === "light");
  }, []);

  // Salva tarefas e tema no LocalStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-300 p-6">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-semibold text-[var(--purple)]">Minhas Tarefas</h1>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>

      <main className="max-w-2xl mx-auto space-y-6">
        <TaskForm setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </main>
    </div>
  );
}
