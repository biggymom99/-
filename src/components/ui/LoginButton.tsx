import React from "react";

interface LoginButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ children, className, type = "button", onClick }) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-[20px] bg-[#E4C89C] hover:bg-[#D4B88C] border-[1.5px] border-black text-black transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default LoginButton;
