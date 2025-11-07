import { useState } from "react";

export default function TaskForm({ setTasks }) {
    const [text, setText] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!text.trim()) return;

        setTasks(prev => [...prev, { id: Date.now(), text, done: false }]);
        setText("");
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Digite uma tarefa..."
                className="flex-1 px-4 py-2 rounded-lg bg-[var(--card)] text-[var(--text)] outline-none"
            />
            <button
                className="px-4 py-2 rounded-lg bg-[var(--purple)] hover:bg-[var(--purpleDark)] transition"
            >
                Adicionar
            </button>
        </form>
    );
}
