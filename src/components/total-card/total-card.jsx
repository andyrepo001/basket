import { PackageOpen } from "lucide-react";
import Icon from "../icon/icon";
import styles from "./total-card.module.css";
import Container from "../container/container";

export default function TotalCard() {
  return (
    <div className={styles.card_wrapper}>
      <Container>
        <div className={styles.total_card}>
          <Icon icon={PackageOpen} size={64} />
          <div className={styles.info}>
            <span>total order</span>
            <span className={styles.quantity}>3658</span>
          </div>
        </div>
      </Container>
    </div>
  );
}
