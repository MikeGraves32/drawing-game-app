// components/Button/Button.tsx
import React, { ButtonHTMLAttributes, FC } from "react";

// Define the props interface for the Button component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger"; // Example for different button styles
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  ...rest
}) => {
  // Add styling based on the 'variant' prop or other props
  const buttonClasses = `px-4 py-2 rounded-md ${
    variant === "primary"
      ? "bg-blue-500 text-white"
      : variant === "secondary"
      ? "bg-gray-300 text-gray-800"
      : "bg-red-500 text-white"
  }`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      {...rest} // Spread any other standard button attributes
    >
      {label}
    </button>
  );
};

export default Button;
