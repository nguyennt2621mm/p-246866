import React, { ReactNode, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  helperText?: string;
  wrapperClassName?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  icon,
  helperText,
  className,
  wrapperClassName,
  ...props
}) => {
  return (
    <div className={cn("relative", wrapperClassName)}>
      {icon && <div>{icon}</div>}
      <input
        className={cn(
          "w-full h-[51px] border text-sm px-[45px] py-0 rounded-[10px] border-solid border-[#8F8C8C]",
          className,
        )}
        {...props}
      />
      {helperText && (
        <div
          className={cn(
            "text-[#8F8C8C] text-xs mt-[5px]",
            props.type === "password" ? "text-right cursor-pointer" : "",
          )}
        >
          {helperText}
        </div>
      )}
    </div>
  );
};

export default InputField;
