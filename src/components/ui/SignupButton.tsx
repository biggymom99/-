import React from "react";

interface SignupButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SignupButton: React.FC<SignupButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={`text-blue-600 hover:text-blue-800 underline transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SignupButton;
