import { Heart, Phone, Search, ShoppingCart, User } from "lucide-react";
import Container from "../container/container";
import DataCell from "../data-cell/data-cell";
import styles from "./navbar.module.css";
import InputButton from "../input-with-button/input-with-button";
import Button from "../button/button";
import Logo from "../logo/logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navbar_wrapper}>
          <div className={styles.column}>
            <Logo />
            <InputButton
              buttonIcon={Search}
              placeholder="search for products..."
            />
          </div>
          <div className={styles.column}>
            <DataCell
              icon={Phone}
              dataName="24/7 delivery"
              dataValue="+8801873228724"
              href="tel:+8801873228724"
            />
            <Link href="/user/wishlist">
              <Button icon={Heart} variant="ghost" />
            </Link>
            <Button icon={ShoppingCart} variant="ghost" />
            <DataCell icon={User} dataName="hello" dataValue="my account" />
          </div>
        </div>
      </Container>
    </nav>
  );
}
