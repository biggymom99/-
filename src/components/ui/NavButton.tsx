import React from "react";

interface NavButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-[20px] hover:bg-gray-700 transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavButton;