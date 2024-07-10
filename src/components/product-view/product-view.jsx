import styles from "./product-view.module.css";

export default function ProductView({ children }) {
  return <div className={styles.product_view}>{children}</div>;
}
