import styles from "./orders.module.css";
import OrderCard from "./order-card/order-card";
import UserDashboardWrapper from "@/components/user-dashboard-wrapper/user-dashboard-wrapper";

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
