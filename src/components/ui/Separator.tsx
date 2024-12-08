import React from "react";

interface SeparatorProps {
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({ className }) => {
  return <div className={`w-full border-t border-gray-300 ${className}`} />;
};

export default Separator;
