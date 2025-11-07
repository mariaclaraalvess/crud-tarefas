import { useState } from "react";

export default function TaskItem({ task, setTasks }) {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(task.text);

    function toggleDone() {
        setTasks((prev) =>
            prev.map((t) =>
                t.id === task.id ? { ...t, done: !t.done } : t
            )
        );
    }

    function saveEdit() {
        setTasks((prev) =>
            prev.map((t) =>
                t.id === task.id ? { ...t, text: value } : t
            )
        );
        setEditing(false);
    }

    function remove() {
        setTasks((prev) => prev.filter((t) => t.id !== task.id));
    }

    return (
        <div
            className="flex items-center gap-3 p-4 rounded-xl bg-[var(--card)] border border-[var(--text-dim)] transition"
        >
            {/* Concluir */}
            <button
                onClick={toggleDone}
                className="text-[var(--text-dim)] hover:text-[var(--purple)] text-lg"
            >
                ✔
            </button>

            {/* Texto ou Input */}
            {editing ? (
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="flex-1 bg-[var(--card)] text-[var(--text)] border border-[var(--purple)] rounded-md px-2 py-1 outline-none"
                />
            ) : (
                <span
                    className={`flex-1 ${task.done
                            ? "line-through text-[var(--text-dim)] opacity-60"
                            : "text-[var(--text)]"
                        }`}
                >
                    {task.text}
                </span>
            )}

            {/* Editar / Salvar */}
            {editing ? (
                <button
                    onClick={saveEdit}
                    className="text-[var(--text-dim)] hover:text-[var(--purple)] text-lg"
                >
                    💾
                </button>
            ) : (
                <button
                    onClick={() => setEditing(true)}
                    className="text-[var(--text-dim)] hover:text-[var(--purple)] text-lg"
                >
                    ✏️
                </button>
            )}

            {/* Remover */}
            <button
                onClick={remove}
                className="text-[var(--text-dim)] hover:text-red-400 text-lg"
            >
                🗑
            </button>
        </div>
    );
}
