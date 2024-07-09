import styles from "./order-details.module.css";
import OrderItem from "./order-item/order-item";
import OrderTotal from "./order-total/order-total";

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
      <div className={styles.details}>
        <OrderTotal />
      </div>
    </div>
  );
}
