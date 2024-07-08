import styles from "./success.module.css";
import Image from "next/image";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import success from "@/assets/success.png";
import Headers from "@/components/headers/headers";
import OrderDetails from "@/components/order-details/order-details";
import Section from "@/components/section/section";

export default function OrderSuccessPage() {
  return (
    <PageWrapper>
      <Section customMargin={0}>
        <div className={styles.success_notice}>
          <figure className={styles.success_image_wrapper}>
            <Image
              src={success}
              alt=""
              className={styles.success_image}
              sizes="200px"
              fill
            />
          </figure>

          <Headers primaryHeader="order placed successfully." />
          <span className={styles.text}>
            your order is success and your order is on the way.
          </span>
          <span className={styles.text}>Order ID: 1243893465929563</span>
        </div>
      </Section>
      <Section>
        <OrderDetails />
      </Section>
    </PageWrapper>
  );
}
