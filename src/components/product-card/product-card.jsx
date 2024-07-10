import styles from "./product-card.module.css";
import Image from "next/image";
import prod from "@/assets/prod.png";
import Container from "../container/container";
import Button from "../button/button";
import { Plus } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <article className={styles.product}>
      <Container>
        <div className={styles.wrapper}>
          <figure className={styles.product_image_wrapper}>
            <Image
              src={prod}
              alt=""
              fill
              sizes=""
              className={styles.product_image}
            />
          </figure>
          <div>
            <h6 className={styles.product_title}>{product.title}</h6>
          </div>
          <div className={styles.product_info}>
            <p>1 kg</p>
            <div className={styles.price_btn}>
              <p>$ 80</p>
              <Button borderStyle="rounded" icon={Plus} />
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
