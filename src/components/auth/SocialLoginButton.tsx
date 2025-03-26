import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SocialLoginButtonProps {
  icon: ReactNode;
  label: string;
  variant?: "primary" | "outline";
  onClick?: () => void;
  className?: string;
}

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  icon,
  label,
  variant = "outline",
  onClick,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center h-10 cursor-pointer px-5 py-0 rounded-[50px]",
        variant === "primary"
          ? "bg-[#1A7EDB] text-white"
          : "border border-solid border-[rgba(0,0,0,0.34)] text-[#1F1E1E]",
        className,
      )}
    >
      <div>{icon}</div>
      <div className="text-xl">{label}</div>
    </button>
  );
};

export default SocialLoginButton;
