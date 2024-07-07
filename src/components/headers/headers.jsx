import styles from "./headers.module.css";

export default function Headers({
  primaryHeader,
  headerText,
  customStyles = {},
  large,
  light,
}) {
  return (
    <hgroup style={customStyles}>
      {primaryHeader && (
        <h2
          className={`${styles.primary_header} ${large ? styles.large : ""} ${
            light ? styles.light : ""
          }`}
        >
          {primaryHeader}
        </h2>
      )}
      {headerText && <span className={styles.header_text}>{headerText}</span>}
    </hgroup>
  );
}
