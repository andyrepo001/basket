import styles from "./data-cell.module.css";
import Icon from "../icon/icon";

export default function DataCell({
  dataName,
  dataValue,
  link = false,
  href,
  icon,
  large,
}) {
  return (
    <div className={styles.wrapper}>
      {icon && <Icon icon={icon} size={28} />}
      <div>
        <span className={styles.data_key}>{dataName}</span>
        {!link && (
          <span className={`${styles.data_value} ${large ? styles.large : ""}`}>
            {dataValue}
          </span>
        )}
        {link && (
          <a href={href} className={`${styles.data_value} ${styles.data_link}`}>
            {dataValue}
          </a>
        )}
      </div>
    </div>
  );
}
