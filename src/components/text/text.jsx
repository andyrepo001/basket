import styles from "./text.module.css";

export default function Text({ children, style }) {
  return (
    <p className={styles.text} style={style}>
      {children}
    </p>
  );
}
