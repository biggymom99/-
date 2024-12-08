import React from "react";

interface SocialButtonProps {
  onClick: () => void;
  className?: string;
  label: string;
  children: React.ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  onClick,
  className,
  label,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-8 h-8 rounded-full flex items-center justify-center border border-black ${className}`}
      aria-label={label}
    >
      {children}
    </button>
  );
};

export default SocialButton;
