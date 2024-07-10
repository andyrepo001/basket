import styles from "./data-cell.module.css";
import Icon from "../icon/icon";

export default function DataCell({
  dataName,
  dataValue,
  href = null,
  icon,
  large,
}) {
  return (
    <div className={styles.wrapper}>
      {icon && <Icon icon={icon} size={28} />}
      <div>
        <span className={styles.data_key}>{dataName}</span>
        {!href && (
          <span className={`${styles.data_value} ${large ? styles.large : ""}`}>
            {dataValue}
          </span>
        )}
        {href && (
          <a href={href} className={`${styles.data_value} ${styles.data_link}`}>
            {dataValue}
          </a>
        )}
      </div>
    </div>
  );
}
