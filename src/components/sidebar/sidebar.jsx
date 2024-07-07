"use client";
import styles from "./sidebar.module.css";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "../button/button";
import Container from "../container/container";
import Headers from "../headers/headers";

export default function Sidebar({
  children,
  footer,
  sidebarHeader,
  headerText,
  onClose,
  isOpen,
}) {
  const [showSidebar, setShowSidebar] = useState(isOpen);

  useEffect(() => {
    setShowSidebar(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setShowSidebar(false);

    setTimeout(() => {
      onClose();
    }, 300);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <aside>
      <div className={`${styles.wrapper} ${showSidebar ? styles.active : ""}`}>
        <header className={styles.sidebar_header}>
          <Container>
            <div className={styles.header_wrapper}>
              <Headers primaryHeader={sidebarHeader} headerText={headerText} />
              <Button
                icon={X}
                variant="close"
                borderStyle="rounded"
                size="sm"
                ariaLabel="close sidebar"
                onClick={handleClose}
              />
            </div>
          </Container>
        </header>
        <main className={styles.sidebar_content}>
          <Container>
            <div className={styles.sidebar_items}>{children}</div>
          </Container>
        </main>
        {footer && (
          <footer className={styles.sidebar_footer}>
            <Container>{footer}</Container>
          </footer>
        )}
      </div>
    </aside>
  );
}
