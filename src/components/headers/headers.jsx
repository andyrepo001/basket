import styles from "./headers.module.css";

export default function Headers({
  primaryHeader,
  headerText,
  customStyles = {},
  light,
  capitalize = true,
}) {
  return (
    <hgroup style={customStyles}>
      {primaryHeader && (
        <h2
          className={`${styles.primary_header}  ${light ? styles.light : ""} ${
            capitalize ? styles.capitalize : ""
          }`}
        >
          {primaryHeader}
        </h2>
      )}
      {headerText && <span className={styles.header_text}>{headerText}</span>}
    </hgroup>
  );
}
