"use client";
import styles from "./mobile-nav.module.css";
import Container from "@/components/container/container";
import Button from "@/components/button/button";
import { Home, Menu, Search, ShoppingCart, User } from "lucide-react";
import { useCategorySidebar } from "@/hooks/use-category-sidebar";
import { useRouter } from "next/navigation";
import { useSearchModal } from "@/hooks/use-search-modal";

export default function MobileNav() {
  const searchModal = useSearchModal();
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
          <Button icon={Search} onClick={searchModal.onOpen} />
          <Button icon={Home} onClick={() => router.push("/")} />
          <Button icon={User} onClick={() => router.push("/user/profile")} />
          <Button icon={ShoppingCart} />
        </div>
      </Container>
    </nav>
  );
}
