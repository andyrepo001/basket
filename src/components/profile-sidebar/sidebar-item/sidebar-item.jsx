import styles from "./sidebar-item.module.css";
import { useProfileSidebar } from "@/hooks/use-profile-sidebar";
import Link from "next/link";
import Button from "@/components/button/button";

export default function SidebarItem({ item, pathname }) {
  const { onClose } = useProfileSidebar();

  return (
    <Link href={item?.link ? item?.link : "#"}>
      <div
        className={`${styles.sidebar_item} ${
          pathname === item?.link ? styles.active : ""
        }`}
      >
        <Button
          label={item?.label}
          secondaryIcon={item?.icon}
          variant="ghost"
          borderStyle="none"
          iconSize={22}
          customStyles={{
            width: "100%",
            justifyContent: "flex-start",
            color: "inherit",
            fontSize: "var(--font-lg)",
          }}
          onClick={onClose}
        />
      </div>
    </Link>
  );
}
