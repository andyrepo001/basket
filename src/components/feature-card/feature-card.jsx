import styles from "./feature-card.module.css";
import Image from "next/image";
import Container from "../container/container";
import Headers from "../headers/headers";

export default function FeatureCard({ feature }) {
  return (
    <div className={styles.feature}>
      <Container>
        <figure className={styles.image_wrapper}>
          <Image
            src={feature?.image}
            alt={feature?.label}
            fill
            className={styles.image}
          />
        </figure>
        <Headers
          primaryHeader={feature?.label}
          customStyles={{
            textAlign: "center",
            margin: "1rem 0",
            fontSize: "1rem",
          }}
        />
        <p className={styles.details}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vitae
          iure vero atque laborum neque.
        </p>
      </Container>
    </div>
  );
}
