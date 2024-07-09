import styles from "./footer-link-group.module.css";
import Link from "next/link";
import Headers from "@/components/headers/headers";

export default function FooterLinkGroup({ link }) {
  return (
    <ul>
      <Headers primaryHeader={link?.label} />
      {link?.links?.map((item, index) => (
        <li className={styles.link} key={index}>
          <Link href={item?.href}>
            <span>{item?.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
