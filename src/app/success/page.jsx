import styles from "./success.module.css";
import Image from "next/image";
import PageWrapper from "@/components/page-wrapper/page-wrapper";
import success from "@/assets/success.png";
import Headers from "@/components/headers/headers";
import OrderDetails from "@/components/order-details/order-details";
import Section from "@/components/section/section";
import Text from "@/components/text/text";

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
          <Text>Your order is success and your order is on the way.</Text>
          <Text>Order ID: 1243893465929563</Text>
        </div>
      </Section>
      <Section>
        <OrderDetails />
      </Section>
    </PageWrapper>
  );
}
