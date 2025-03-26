import React from "react";

interface DividerProps {
  text?: string;
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  text = "or",
  className = "",
}) => {
  return (
    <div className={`flex items-center w-full ${className}`}>
      <div className="flex-1 h-px bg-[#938C8C]" />
      <div className="text-[#999393] text-xs italic mx-2.5 my-0">{text}</div>
      <div className="flex-1 h-px bg-[#938C8C]" />
    </div>
  );
};

export default Divider;
