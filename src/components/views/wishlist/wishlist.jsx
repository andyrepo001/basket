import styles from "./wishlist.module.css";
import UserDashboardWrapper from "@/components/user-dashboard-wrapper/user-dashboard-wrapper";

export default function Wishlist() {
  return (
    <UserDashboardWrapper title="wishlist items">
      <div className={styles.order_cards}></div>
    </UserDashboardWrapper>
  );
}
