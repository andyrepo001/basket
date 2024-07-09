import styles from "./order-item.module.css";
import Image from "next/image";
import DataCell from "@/components/data-cell/data-cell";
import demo from "@/assets/product.png";

export default function OrderItem() {
  return (
    <div className={styles.order_item}>
      <div className={styles.head}>
        <figure className={styles.image_wrapper}>
          <Image src={demo} alt="" className={styles.image} fill sizes="" />
        </figure>
        <div className={styles.info}>
          <h5 className={styles.title}>Pizza with extra cheese mozarella</h5>
          <DataCell dataName="weight" dataValue="500g" large />
        </div>
      </div>
      <div className={styles.item_info}>
        <DataCell dataName="price" dataValue="$19.99" large />
        <DataCell dataName="quantity" dataValue="5" large />
        <DataCell dataName="total" dataValue="$99.00" large />
        <DataCell dataName="brand" dataValue="apex" large />
      </div>
    </div>
  );
}
