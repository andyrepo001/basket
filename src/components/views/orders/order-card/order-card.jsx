import Image from "next/image";
import styles from "./order-card.module.css";
import DataCell from "@/components/data-cell/data-cell";
import product from "@/assets/product.png";
import Headers from "@/components/headers/headers";
import Status from "@/components/status/status";
import Container from "@/components/container/container";

export default function OrderCard() {
  return (
    <article className={styles.order_card}>
      <Container>
        <div className={styles.wrapper}>
          <figure className={styles.product_image_wrapper}>
            <Image src={product} alt="" fill className={styles.product_image} />
          </figure>
          <section className={styles.details}>
            <div className={styles.header_wrapper}>
              {/* <Headers primaryHeader="Fantasy Crunchy Choco Chip Cookies" /> */}
              <h2 className={styles.title}>
                Fantasy Crunchy Choco Chip Cookies
              </h2>
              <Status status="pending" />
            </div>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              nobis sunt illo voluptate facere quod fuga facilis sed aut alias.
            </p>
            <div className={styles.additional_info}>
              <div className={styles.column}>
                <DataCell dataName="price" dataValue="$18.99" />
                <DataCell dataName="quantity" dataValue="6" />
              </div>
              <div className={styles.column}>
                <DataCell dataName="order date" dataValue="23 june, 2023" />
                <DataCell dataName="delivery date" dataValue="28 july 2027" />
              </div>
            </div>
          </section>
        </div>
      </Container>
    </article>
  );
}
