export const Card = ({ className = "", children }) => (
  <div className={\`rounded-xl border p-2 \${className}\`}>{children}</div>
);

export const CardContent = ({ className = "", children }) => (
  <div className={\`p-4 \${className}\`}>{children}</div>
);
