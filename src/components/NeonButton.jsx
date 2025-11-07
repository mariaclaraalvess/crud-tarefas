export default function NeonButton({ children, className = "", ...props }) {
    return (
        <button
            {...props}
            className={
                "px-4 py-2 rounded-lg font-medium text-white bg-[var(--purple)] " +
                "shadow-[0_0_10px_rgba(123,92,255,0.7)] hover:shadow-[0_0_14px_var(--neon-blue)] " +
                "hover:scale-[1.04] active:scale-[0.97] transition-transform transition-shadow " +
                className
            }
        >
            {children}
        </button>
    );
}
