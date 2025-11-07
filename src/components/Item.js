import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function TaskItem({ task }) {

    async function toggleDone() {
        await updateDoc(doc(db, "tarefas", task.id), {
            done: !task.done,
        });
    }

    async function remove() {
        await deleteDoc(doc(db, "tarefas", task.id));
    }

    return (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-[var(--card)] border border-[var(--text-dim)] transition">
            <button onClick={toggleDone} className="text-[var(--text-dim)] hover:text-[var(--purple)]">
                ✔
            </button>

            <span className={`flex-1 ${task.done ? "line-through opacity-50" : ""}`}>
                {task.text}
            </span>

            <button onClick={remove} className="text-[var(--text-dim)] hover:text-red-400">
                🗑
            </button>
        </div>
    );
}
