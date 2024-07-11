import Link from "next/link";
import Image from "next/image";
import styles from "./logo.module.css";
import logo from "@/assets/logo.png";

export default function Logo({ onClick }) {
  return (
    <Link href="/">
      <figure className={styles.logo_wrapper} onClick={onClick}>
        <Image
          className={styles.logo}
          src={logo}
          alt="borobasket"
          fill
          sizes="150px"
        />
      </figure>
    </Link>
  );
}
