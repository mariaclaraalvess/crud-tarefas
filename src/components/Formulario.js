import { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function TaskForm({ user }) {
    const [text, setText] = useState("");

    async function handleAdd() {
        if (!text.trim()) return;
        if (!user) return alert("Você precisa estar logado!");

        await addDoc(collection(db, "tarefas"), {
            text,
            done: false,
            userId: user.uid,
            createdAt: Date.now(),
        });

        setText("");
    }

    return (
        <Dialog>
            <DialogTrigger>
                {/*Botão flutuante */}
                <div className="fixed bottom-6 right-6 w-14 h-14 flex items-center justify-center rounded-full bg-[var(--purple)] hover:bg-[var(--purple-dark)] text-white text-3xl shadow-lg cursor-pointer transition">
                    +
                </div>
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Adicionar Tarefa</DialogTitle>
                    <DialogDescription>
                        Digite o nome da tarefa e clique em “Adicionar”.
                    </DialogDescription>
                </DialogHeader>

                <Input
                    autoFocus
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Digite a tarefa..."
                />

                <Button onClick={handleAdd} className="mt-4">
                    Adicionar
                </Button>
            </DialogContent>
        </Dialog>

    );
}
