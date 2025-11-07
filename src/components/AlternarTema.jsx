import { useState, useEffect } from "react";

export default function AlternarTema() {
    const [dark, setDark] = useState(() =>
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="px-3 py-2 rounded-md bg-[var(--card)] text-[var(--text)] hover:bg-[var(--purple)] transition"
        >
            {dark ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
}
