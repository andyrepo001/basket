import styles from "./banner.module.css";
import Image from "next/image";
import b1 from "@/assets/b1.jpg";
import b2 from "@/assets/b2.jpg";

export default function Banner() {
  return (
    <div>
      <div className={styles.banner_container}>
        <figure className={styles.banner_image_wrapper}>
          <Image src={b1} alt="" className={styles.banner_image} fill />
        </figure>
        <figure className={styles.banner_image_wrapper}>
          <Image src={b2} alt="" className={styles.banner_image} fill />
        </figure>
      </div>
    </div>
  );
}
