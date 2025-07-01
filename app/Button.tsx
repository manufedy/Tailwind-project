import { type ButtonHTMLAttributes, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  children: ReactNode;
  className?: string;
}

export const Button = ({
  variant = "primary",
  children,
  className,
  ...buttonProps
}: ButtonProps) => {
  const baseClasses =
    "py-3 px-6 rounded-lg text-body-base font-body-base transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center";

  let variantSpecificClasses = "";
  let stateSpecificClasses = "";

  switch (variant) {
    case "primary":
      variantSpecificClasses = "bg-primary-5 text-neutral-0";
      stateSpecificClasses =
        " hover:bg-primary-40 active:bg-primary-50 focus:ring-primary-30 disabled:bg-primary-5/50 disabled:text-neutral-0/50 ";
      break;

    case "secondary":
      variantSpecificClasses =
        "bg-neutral-0 text-neutral-60 border border-neutral-30";
      stateSpecificClasses =
        "hover:bg-neutral-5 active:bg-neutral-10 focus:ring-neutral-20 disabled:bg-neutral-0 disabled:text-neutral-30 disabled:border-neutral-20";
      break;

    case "tertiary":
      variantSpecificClasses = "bg-transparent text-neutral-60";
      stateSpecificClasses =
        "hover:text-primary-50 hover:underline active:text-primary-60 active:underline focus:ring-primary-30 disabled:text-neutral-30";
      break;

    default:
      variantSpecificClasses = "bg-primary-5 text-neutral-0";
      stateSpecificClasses =
        " hover:bg-primary-40 active:bg-primary-50 focus:ring-primary-30 disabled:bg-primary-5/50 disabled:text-neutral-0/50 ";
      break;
  }

  const combinedClasses = twMerge([
    baseClasses,
    variantSpecificClasses,
    stateSpecificClasses,
    className,
  ]);

  return (
    <button className={combinedClasses} {...buttonProps}>
      {children}
    </button>
  );
};
