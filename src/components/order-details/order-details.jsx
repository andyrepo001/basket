import styles from "./order-details.module.css";
import OrderItem from "./order-item/order-item";

export default function OrderDetails() {
  return (
    <div className={styles.order_details}>
      <div className={styles.items}>
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
      <div className={styles.details}></div>
    </div>
  );
}
