"use client";
import styles from "./address.module.css";
import { useState } from "react";
import { Plus } from "lucide-react";
import AddressCard from "./address-card/address-card";
import UserDashboardWrapper from "@/components/user-dashboard-wrapper/user-dashboard-wrapper";
import Button from "@/components/button/button";
import AddAddressModal from "@/components/modals/add-address-modal/add-address-modal";

export default function Address() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <AddAddressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <UserDashboardWrapper title="address book">
        <div>
          <Button
            label="add new address"
            variant="secondary"
            secondaryIcon={Plus}
            onClick={() => setIsModalOpen(true)}
          />
          <div className={styles.addresses}>
            <AddressCard />
            <AddressCard />
            <AddressCard />
            <AddressCard />
            <AddressCard />
            <AddressCard />
          </div>
        </div>
      </UserDashboardWrapper>
    </>
  );
}
