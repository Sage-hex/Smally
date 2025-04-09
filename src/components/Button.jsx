// src/components/ui/button.jsx

export function Button({ children, onClick, className = "", type = "button", variant = "default" }) {
    const baseStyles = "px-4 py-2 rounded font-medium transition-all duration-200";
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      ghost: "bg-transparent text-white hover:text-gray-300",
    };
  
    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  }
  