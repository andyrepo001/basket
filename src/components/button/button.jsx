import styles from "./button.module.css";
import { memo } from "react";
import Icon from "../icon/icon";

function Button({
  ariaLabel,
  label,
  icon,
  secondaryIcon,
  iconSize,
  variant = "primary",
  borderStyle,
  type = "button",
  onClick,
  customStyles = {},
}) {
  const variants = {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      outline: styles.outline,
      ghost: styles.ghost,
      destructive: styles.destructive,
      close: styles.close,
    },

    borderType: {
      rounded: styles.rounded,
      square: styles.square,
      none: styles.no_border,
    },
  };

  return (
    <button
      style={customStyles}
      type={type}
      className={`button ${styles.button} ${variants.variant[variant]} ${
        borderStyle ? variants.borderType[borderStyle] : ""
      }`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {secondaryIcon && <Icon icon={secondaryIcon} size={iconSize} />}
      {label && <span>{label}</span>}
      {icon && <Icon size={iconSize} icon={icon} />}
    </button>
  );
}

export default memo(Button);
