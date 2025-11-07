import { useState, useEffect } from "react";

export default function AlternarTema() {
    const [light, setLight] = useState(() =>
        localStorage.getItem("theme") === "light"
    );

    useEffect(() => {
        if (light) {
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
        }
    }, [light]);

    return (
        <button
            onClick={() => setLight(!light)}
            className="px-3 py-2 rounded-md bg-[var(--card)] text-[var(--text)] hover:bg-[var(--purple)] transition"
        >
            {light ? "☀️ Light" : "🌙 Dark"}
        </button>
    );
}
