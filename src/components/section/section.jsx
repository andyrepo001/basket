import styles from "./section.module.css";
import Headers from "../headers/headers";

export default function Section({
  children,
  sectionTitle,
  sectionSecondaryTitle,
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
          <Headers
            primaryHeader={sectionTitle}
            secondaryHeader={sectionSecondaryTitle}
            secondaryLight
          />
        </div>
      )}
      <div style={customStyles}>{children}</div>
    </section>
  );
}
