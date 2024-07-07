import UserDashboardWrapper from "@/components/user-dashboard-wrapper/user-dashboard-wrapper";
import OrderCard from "./order-card/order-card";
import styles from "./orders.module.css";

export default function Orders() {
  return (
    <UserDashboardWrapper title="order history">
      <div className={styles.order_cards}>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </UserDashboardWrapper>
  );
}
