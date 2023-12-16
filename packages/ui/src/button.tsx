import { ReactNode } from "react";
import classes from "./button.module.css";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({
  children,
  // className,
  appName,
}: ButtonProps) => {
  return (
    <button
      // className={className}
      className={classes.root}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
