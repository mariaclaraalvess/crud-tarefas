import { useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

export default function TaskItem({ task }) {
    const [editing, setEditing] = useState(false);
    const [value, setValue] = useState(task.text);

    async function toggleDone() {
        await updateDoc(doc(db, "tarefas", task.id), {
            done: !task.done,
        });
    }

    async function saveEdit() {
        if (!value.trim()) return;
        await updateDoc(doc(db, "tarefas", task.id), {
            text: value,
        });
        setEditing(false);
    }

    async function remove() {
        await deleteDoc(doc(db, "tarefas", task.id));
    }

    return (
        <div className="glass flex items-center gap-3 p-4 rounded-xl shadow-[0_0_12px_rgba(0,225,255,0.25)] hover:shadow-[0_0_16px_rgba(123,92,255,0.4)] transition">
            {/* Concluir */}
            <button
                onClick={toggleDone}
                className="text-[var(--text-dim)] hover:text-[var(--purple)] text-lg"
            >
                ✔
            </button>

            {editing ? (
                <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="flex-1 bg-[var(--card)] text-[var(--text)] border border-[var(--purple)] rounded-md px-2 py-1 outline-none"
                />
            ) : (
                <span
                    className={`flex-1 ${task.done ? "line-through text-[var(--text-dim)] opacity-60" : "text-[var(--text)]"}`}
                >
                    {task.text}
                </span>
            )}

            {editing ? (
                <button onClick={saveEdit} className="text-[var(--text-dim)] hover:text-[var(--purple)] text-lg">
                    💾
                </button>
            ) : (
                <button onClick={() => setEditing(true)} className="text-[var(--text-dim)] hover:text-[var(--purple)] text-lg">
                    ✏️
                </button>
            )}

            <button onClick={remove} className="text-[var(--text-dim)] hover:text-red-400 text-lg">
                🗑
            </button>
        </div>
    );
}
