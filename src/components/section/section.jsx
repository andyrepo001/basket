import styles from "./section.module.css";
import Headers from "../headers/headers";

export default function Section({
  children,
  sectionTitle,
  customStyles,
  customMargin,
}) {
  return (
    <section
      className={styles.section}
      aria-label={sectionTitle}
      style={{ margin: customMargin }}
    >
      {sectionTitle && (
        <div className={styles.section_title}>
          <Headers primaryHeader={sectionTitle} />
        </div>
      )}
      <div style={customStyles}>{children}</div>
    </section>
  );
}
