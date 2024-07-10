import Logo from "@/components/logo/logo";
import styles from "./mobile-nav.module.css";
import Container from "@/components/container/container";
import Button from "@/components/button/button";
import { Heart, Home, Menu, Search, ShoppingCart } from "lucide-react";

export default function MobileNav() {
  return (
    <nav className={styles.mobile_nav}>
      <Container>
        <div className={styles.nav_items}>
          <Button icon={Menu} />
          <Button icon={Search} />
          <Button icon={Home} />
          <Button icon={Heart} />
          <Button icon={ShoppingCart} />
        </div>
      </Container>
    </nav>
  );
}
