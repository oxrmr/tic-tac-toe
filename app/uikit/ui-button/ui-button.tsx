import type { FC, ReactNode } from "react";

export enum UIButtonVariants {
  primary = "text-white bg-teal-600 transition-colors hover:bg-teal-500 ",
  outlined = "border border-teal-600 text-teal-600 transition-colors hover:bg-slate-100",
}

export enum UIButtonSizes {
  medium = " px-6 py-2 text-sm leading-tight rounded",
  large = " px-5 py-2 text-2xl leading tight rounded-lg",
}

interface UIButtonProps {
  children: ReactNode;
  size: UIButtonSizes;
  variant: UIButtonVariants;
  className?: string;
}

export const UIButton: FC<UIButtonProps> = ({ children, size, variant, className }) => {
  return <button className={`${className} ${size} ${variant}`}>{children}</button>;
};
