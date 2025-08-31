
type Props = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  children: React.ReactNode;
};

export default function Button({ href, onClick, variant = "primary", className = "", children }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dsprint";
  const styles =
    variant === "primary"
      ? "bg-dsprint text-white hover:shadow-lg hover:-translate-y-0.5"
      : variant === "outline"
      ? "border border-dsprint text-black hover:bg-dsprint/10"
      : "text-gray-600 hover:bg-gray-100";
  const El: any = href ? "a" : "button";
  return (
    <El
      href={href}
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </El>
  );
}
