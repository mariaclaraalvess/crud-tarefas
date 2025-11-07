import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function TaskForm({ user }) {
    const [text, setText] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        if (!text.trim()) return;
        if (!user) return alert("Você precisa estar logado!");

        await addDoc(collection(db, "tarefas"), {
            text,
            done: false,
            userId: user.uid, // 🔥 identifica o dono da tarefa
            createdAt: Date.now(),
        });

        setText("");
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Digite uma tarefa..."
                className="flex-1 px-4 py-2 rounded-lg bg-[var(--card)] text-[var(--text)] outline-none"
            />

            <button
                className="px-4 py-2 rounded-lg bg-[var(--purple)] hover:bg-[var(--purpleDark)] transition font-medium text-white"
            >
                Adicionar
            </button>
        </form>
    );
}
