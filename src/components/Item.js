import { useState } from "react";
import { db } from "../firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { Checkbox } from "../components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function TaskItem({ task }) {
    const [open, setOpen] = useState(false);
    const [editText, setEditText] = useState(task.text);

    async function toggleDone() {
        await updateDoc(doc(db, "tarefas", task.id), {
            done: !task.done
        });
    }

    async function handleSave() {
        await updateDoc(doc(db, "tarefas", task.id), {
            text: editText
        });
        setOpen(false);
    }

    async function handleDelete() {
        await deleteDoc(doc(db, "tarefas", task.id));
    }

    return (
        <div className="flex items-center justify-between bg-[var(--card)] p-3 rounded-lg">
            <label className="flex items-center gap-3 cursor-pointer">
                <Checkbox checked={task.done} onCheckedChange={toggleDone} />
                <span className={task.done ? "line-through opacity-50" : ""}>{task.text}</span>
            </label>

            <div className="flex gap-3 text-lg">
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger>✏️</DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Editar Tarefa</DialogTitle>
                        </DialogHeader>

                        <Input
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                        />

                        <Button onClick={handleSave} className="mt-4">💾 Salvar</Button>
                    </DialogContent>
                </Dialog>

                <button onClick={handleDelete}>🗑</button>
            </div>
        </div>
    );
}
