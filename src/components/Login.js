import { loginGoogle, logout, auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
    const [user] = useAuthState(auth);

    return (
        <div className="flex justify-center mb-6">
            {user ? (
                <button
                    onClick={logout}
                    className="px-4 py-2 rounded-lg bg-[var(--purple)] hover:bg-[var(--purpleDark)] text-white transition"
                >
                    Sair ({user.displayName})
                </button>
            ) : (
                <button
                    onClick={loginGoogle}
                    className="px-4 py-2 rounded-lg bg-[var(--purple)] hover:bg-[var(--purpleDark)] text-white transition"
                >
                    Entrar com Google
                </button>
            )}
        </div>
    );
}
