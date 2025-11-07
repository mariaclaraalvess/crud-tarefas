import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import TaskItem from "./Item";

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
        <div className="glass p-4 rounded-xl space-y-3">
            {tasks.length === 0 ? (
                <p className="text-center opacity-60">Nenhuma tarefa</p>
            ) : (
                tasks.map(task => (
                    <TaskItem key={task.id} task={task} />
                ))
            )}
        </div>
    );
}
