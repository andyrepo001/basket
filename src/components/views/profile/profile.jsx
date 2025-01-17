"use client";
import styles from "./profile.module.css";
import { useState } from "react";
import { BadgeCheck, Mail, MapPin } from "lucide-react";
import Icon from "@/components/icon/icon";
import DataCell from "@/components/data-cell/data-cell";
import Button from "@/components/button/button";
import TotalCard from "@/components/total-card/total-card";
import UserDashboardWrapper from "@/components/user-dashboard-wrapper/user-dashboard-wrapper";
import EditProfileDetailsModal from "@/components/modals/edit-profile-details-modal/edit-profile-details-modal";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <UserDashboardWrapper title="user information">
        <div>
          <div className={styles.header_wrapper}>
            <h6 className={styles.username}>jane doe</h6>
            <Button
              label="edit details"
              variant="secondary"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
          <div className={styles.info_wrapper}>
            <div className={styles.info_group}>
              <Icon icon={MapPin} size={20} />
              <span className={styles.info_text}>Dhaka, Bangladesh</span>
            </div>
            <div className={styles.info_group}>
              <Icon icon={Mail} size={20} />
              <span className={styles.info_text}>jane@email.com</span>
            </div>
            <div className={styles.info_group}>
              <Icon icon={BadgeCheck} size={20} />
              <span className={styles.info_text}>
                Member since 28 July, 2023
              </span>
            </div>
          </div>

          <div className={styles.personal_info}>
            <div className={styles.column}>
              <DataCell dataName="gender" dataValue="female" />
              <DataCell dataName="birthdate" dataValue="3 june, 1999" />
              <DataCell dataName="phone number" dataValue="+88-018-73228724" />
              <DataCell
                dataName="address"
                dataValue="549 Sulphur Springs Road, Downers, BD"
              />
            </div>
            <div className={styles.column}>
              <DataCell dataName="username" dataValue="janedoe99" />
              <DataCell dataName="password" dataValue="*******" />
            </div>
          </div>
        </div>

        <div className={styles.total_info}>
          <TotalCard />
          <TotalCard />
          <TotalCard />
        </div>
      </UserDashboardWrapper>
      <EditProfileDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
