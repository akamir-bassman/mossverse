import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export const Button = ({ className, children, loading, ...rest }: ButtonProps) => {
  const loadingClassName = loading ? "loading" : "";

  return (
    <button className={twMerge("btn", loadingClassName, className)} {...rest}>
      {children}
    </button>
  );
};
