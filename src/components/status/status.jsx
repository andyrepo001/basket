import styles from "./status.module.css";

export default function Status({ status }) {
  const stats = {
    pending: "#FF5858",
    delivered: "#0DA084",
  };

  return (
    <div className={styles.status} style={{ backgroundColor: stats[status] }}>
      <span>pending</span>
    </div>
  );
}
