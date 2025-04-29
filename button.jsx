export const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={\`px-4 py-2 rounded-lg font-semibold shadow-md transition-colors duration-300 \${className}\`}
    >
      {children}
    </button>
  );
};
