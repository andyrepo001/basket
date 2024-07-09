import styles from "./input.module.css";
import { rubik } from "@/lib/fonts";

export default function Input({
  ariaLabel,
  label,
  name,
  value,
  placeholder,
  type = "text",
  borderStyle,
  customRadius,
  required,
  id,
}) {
  const variants = {
    borderType: {
      square: styles.square,
      none: styles.no_border,
    },
  };
  return (
    <div
      className={styles.input_wrapper}
      style={
        type === "checkbox"
          ? { flexDirection: "row-reverse", width: "fit-content" }
          : {}
      }
    >
      {label && (
        <label htmlFor={id} className={`${styles.label}`}>
          {label}
        </label>
      )}
      {type !== "textarea" && (
        <input
          id={id}
          name={name}
          value={value}
          aria-label={ariaLabel}
          style={{
            borderRadius: customRadius,
            width: type === "checkbox" ? "fit-content" : "100%",
          }}
          type={type}
          placeholder={placeholder}
          required={required}
          className={`${styles.input} ${variants.borderType[borderStyle]}`}
        />
      )}
      {type === "textarea" && (
        <textarea
          id={id}
          name={name}
          value={value}
          aria-label={ariaLabel}
          style={{
            borderRadius: customRadius,
          }}
          type={type}
          placeholder={placeholder}
          required={required}
          className={`${styles.input} ${variants.borderType[borderStyle]} ${rubik.className}`}
          rows="5"
        ></textarea>
      )}
    </div>
  );
}
