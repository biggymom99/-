import React, { ButtonHTMLAttributes } from "react";

interface SignupButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const SignupButton: React.FC<SignupButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button
      className={`text-blue-600 hover:text-blue-800 underline transition ${className}`}
      {...rest} // 나머지 속성 전달
    >
      {children}
    </button>
  );
};

export default SignupButton;
