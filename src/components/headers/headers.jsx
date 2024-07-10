import styles from "./headers.module.css";

export default function Headers({
  primaryHeader,
  secondaryHeader,
  customStyles = {},
  light,
  secondaryLight,
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
      {secondaryHeader && (
        <h4
          className={`${styles.secondaryHeader} ${
            secondaryLight ? styles.light : ""
          }`}
        >
          {secondaryHeader}
        </h4>
      )}
    </hgroup>
  );
}
