"use client";
import styles from "./category-sidebar.module.css";
import { useCategorySidebar } from "@/hooks/use-category-sidebar";
import { useEffect, useRef } from "react";
import Container from "../container/container";
import Icon from "../icon/icon";
import Link from "next/link";
import {
  Beef,
  Carrot,
  Cat,
  Cookie,
  CupSoda,
  FerrisWheel,
  Milk,
  Salad,
  Snowflake,
} from "lucide-react";
import Logo from "../logo/logo";

export default function CategorySidebar() {
  const { isOpen, onClose } = useCategorySidebar();
  const categoryRef = useRef(null);

  const handleClick = (event) => {
    if (isOpen && !categoryRef?.current?.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClick);
    }

    return () => document.removeEventListener("click", handleClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <aside
      className={`${styles.category} ${isOpen ? styles.active : ""}`}
      ref={categoryRef}
    >
      <Container>
        <div className={styles.logo}>
          <Logo onClick={handleClose} />
        </div>
        <div className={styles.items}>
          {/* Category */}
          <Link href="/shop">
            <div onClick={handleClose} className={styles.category_item}>
              <Icon icon={Carrot} size={35} />
              <span className={styles.category_name}>vegetable & fruit</span>
            </div>
          </Link>
          {/* Category */}
          <Link href="/shop">
            <div onClick={handleClose} className={styles.category_item}>
              <Icon icon={CupSoda} size={35} />
              <span className={styles.category_name}>beverages</span>
            </div>
          </Link>
          {/* Category */}
          <Link href="/shop">
            <div onClick={handleClose} className={styles.category_item}>
              <Icon icon={Beef} size={35} />
              <span className={styles.category_name}>meats & seafood</span>
            </div>
          </Link>
          {/* Category */}
          <Link href="/shop">
            <div onClick={handleClose} className={styles.category_item}>
              <Icon icon={FerrisWheel} size={35} />
              <span className={styles.category_name}>breakfast & dairy</span>
            </div>
          </Link>
          {/* Category */}
          <Link href="/shop">
            <div onClick={handleClose} className={styles.category_item}>
              <Icon icon={Snowflake} size={35} />
              <span className={styles.category_name}>frozen foods</span>
            </div>
          </Link>
          {/* Category */}
          <Link href="/shop">
            <div onClick={handleClose} className={styles.category_item}>
              <Icon icon={Cookie} size={35} />
              <span className={styles.category_name}>biscuit & snacks</span>
            </div>
          </Link>
          {/* Category */}
          <Link href="/shop">
            <div onClick={handleClose} className={styles.category_item}>
              <Icon icon={Salad} size={35} />
              <span className={styles.category_name}>grocery & staples</span>
            </div>
          </Link>
          {/* Category */}
          <Link href="/shop">
            <div onClick={handleClose} className={styles.category_item}>
              <Icon icon={Milk} size={35} />
              <span className={styles.category_name}>milk & dairies</span>
            </div>
          </Link>
          {/* Category */}
          <Link href="/shop">
            <div onClick={handleClose} className={styles.category_item}>
              <Icon icon={Cat} size={35} />
              <span className={styles.category_name}>pet foods</span>
            </div>
          </Link>
        </div>
      </Container>
    </aside>
  );
}
