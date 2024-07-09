import styles from "./order-total.module.css";
import Headers from "@/components/headers/headers";
import Container from "@/components/container/container";
import DataCell from "@/components/data-cell/data-cell";

export default function OrderTotal() {
  return (
    <div className={styles.order_total}>
      <Container>
        <Headers primaryHeader="order summary" light />
        <div className={styles.total}>
          <DataCell large dataName="subtotal" dataValue="$99.99" />
          <DataCell large dataName="delivery charge" dataValue="$19.99" />
          <DataCell large dataName="discount" dataValue="$5.00" />
          <DataCell large dataName="payment method" dataValue="paypal" />
        </div>
        <DataCell
          large
          dataName="delivery address"
          dataValue="park avenue, NY, 3432, United states"
        />
      </Container>
    </div>
  );
}
