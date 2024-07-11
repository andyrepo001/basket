"use client";
import Logo from "@/components/logo/logo";
import styles from "./mobile-nav.module.css";
import Container from "@/components/container/container";
import Button from "@/components/button/button";
import { Heart, Home, Menu, Search, ShoppingCart } from "lucide-react";
import { useCategorySidebar } from "@/hooks/use-category-sidebar";
import { useRouter } from "next/navigation";

export default function MobileNav() {
  const categorySidebar = useCategorySidebar();
  const router = useRouter();

  const handleCategorySidebarOpen = (e) => {
    categorySidebar.onOpen();
  };

  return (
    <nav className={styles.mobile_nav}>
      <Container>
        <div className={styles.nav_items}>
          <Button icon={Menu} onClick={handleCategorySidebarOpen} />
          <Button icon={Search} />
          <Button icon={Home} onClick={() => router.push("/")} />
          <Button icon={Heart} onClick={() => router.push("/user/wishlist")} />
          <Button icon={ShoppingCart} />
        </div>
      </Container>
    </nav>
  );
}
