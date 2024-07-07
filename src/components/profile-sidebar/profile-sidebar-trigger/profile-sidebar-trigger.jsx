"use client";
import styles from "./profile-sidebar-trigger.module.css";
import { useProfileSidebar } from "@/hooks/use-profile-sidebar";

export default function ProfileSiebarTrigger({ children }) {
  const { onOpen } = useProfileSidebar();

  return (
    <div className={styles.sidebar_trigger} onClick={onOpen}>
      {children}
    </div>
  );
}
