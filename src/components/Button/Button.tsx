import React, { ReactNode } from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const Button = ({
  variant,
  size,
  children,
  ...props
}:ButtonProps) => {
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-400 text-white hover:bg-gray-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    warning: "bg-yellow-600 text-white hover:bg-yellow-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    'outline-primary': "border border-blue-600 text-blue-600 hover:bg-blue-100",
    'outline-secondary': "border border-gray-400 text-gray-400 hover:bg-gray-100",
    'outline-success': "border border-green-600 text-green-600 hover:bg-green-100",
    'outline-warning': "border border-yellow-600 text-yellow-600 hover:bg-yellow-100",
    'outline-danger': "border border-red-600 text-red-600 hover:bg-red-100",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  return (
    <button
      type="button"
      className={`p-2 ${variantStyles[variant || "primary"]} ${sizeStyles[size || "md"]} rounded-md`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;