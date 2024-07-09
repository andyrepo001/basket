"use client";
import styles from "./profile-sidebar.module.css";
import { useParams } from "next/navigation";
import { Box, Heart, MapPin, User, X } from "lucide-react";
import { useProfileSidebar } from "@/hooks/use-profile-sidebar";
import Image from "next/image";
import cover from "@/assets/cover.png";
import profile from "@/assets/1.jpg";
import Container from "../container/container";
import SidebarItem from "./sidebar-item/sidebar-item";
import Button from "../button/button";
import Headers from "../headers/headers";

const sidebarItems = [
  {
    label: "profile",
    link: "profile",
    icon: User,
  },
  {
    label: "orders",
    link: "orders",
    icon: Box,
  },
  {
    label: "wishlist",
    link: "wishlist",
    icon: Heart,
  },
  {
    label: "address",
    link: "address",
    icon: MapPin,
  },
];

export default function ProfileSidebar() {
  const pathname = useParams();
  const { isOpen, onClose } = useProfileSidebar();

  return (
    <aside
      className={`${styles.profile_sidebar} ${isOpen ? styles.visible : ""}`}
    >
      <header className={styles.header}>
        <figure className={styles.cover_image_wrapper}>
          <Image
            src={cover}
            alt=""
            fill
            className={styles.cover_image}
            sizes="(max-width: 768px) 100vw, 350px"
          />

          <div className={styles.profile_image_main}>
            <figure className={styles.profile_image_wrapper}>
              <Image
                src={profile}
                alt=""
                fill
                className={styles.profile_image}
                sizes="80px"
              />
            </figure>
          </div>
        </figure>

        <div className={styles.user_info}>
          <Headers primaryHeader="jane doe" />
          <p className={styles.email}>jane@email.com</p>
        </div>

        <div className={styles.button_wrapper}>
          <Button
            icon={X}
            variant="close"
            borderStyle="rounded"
            onClick={onClose}
          />
        </div>
      </header>

      <Container>
        <div className={styles.sidebar_items}>
          {sidebarItems.map((item, index) => (
            <SidebarItem key={index} item={item} pathname={pathname?.view} />
          ))}
        </div>
      </Container>
    </aside>
  );
}
