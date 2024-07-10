import styles from "./input-with-button.module.css";
import Button from "../button/button";
import Input from "../input/input";

export default function InputButton({
  buttonLabel,
  buttonIcon,
  buttonAriaLabel,
  inputType,
  inputAriaLabel,
  placeholder,
}) {
  return (
    <form className={styles.input_button}>
      <Input
        placeholder={placeholder}
        required
        ariaLabel={inputAriaLabel}
        type={inputType}
        customRadius="var(--radius) 0 0 var(--radius)"
      />
      <Button
        label={buttonLabel}
        ariaLabel={buttonAriaLabel}
        icon={buttonIcon}
        type="submit"
        variant="secondary"
        borderStyle="square"
      />
    </form>
  );
}
