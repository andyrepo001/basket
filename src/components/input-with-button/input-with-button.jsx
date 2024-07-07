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
        borderStyle="none"
      />
      <Button
        label={buttonLabel}
        ariaLabel={buttonAriaLabel}
        icon={buttonIcon}
        type="submit"
        variant="secondary"
      />
    </form>
  );
}
