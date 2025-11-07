import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import TaskItem from "./Item";
import { Card } from "../components/ui/card";

export default function TaskList({ user }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (!user) return;

        const q = query(
            collection(db, "tarefas"),
            where("userId", "==", user.uid),
            orderBy("createdAt", "desc")
        );

        const unsub = onSnapshot(q, (snapshot) => {
            setTasks(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });

        return () => unsub();
    }, [user]);

    return (
        <Card className="p-4 space-y-3 glass">
            {tasks.length === 0 ? (
                <p className="text-center opacity-60">Nenhuma tarefa</p>
            ) : (
                tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))
            )}
        </Card>
    );
}
