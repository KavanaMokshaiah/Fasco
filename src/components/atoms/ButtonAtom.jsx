import React from "react";
import Button from "@mui/material/Button";
import styles from "../../styles/atoms/ButtonAtom.module.scss"; // Importing the SCSS file

const ButtonAtom = ({
  children,
  className,
  variant = "contained",
  color = "primary",
  size = "medium",
  ...props
}) => {
  return (
    <Button
      className={`${styles.button} ${className}`}
      variant={variant} // Optionally passed variant (contained, outlined, etc.)
      color={color}
      size={size}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonAtom;
