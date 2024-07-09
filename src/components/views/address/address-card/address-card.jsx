"use client";
import styles from "./address-card.module.css";
import { memo, useState } from "react";
import DataCell from "@/components/data-cell/data-cell";
import Button from "@/components/button/button";
import Container from "@/components/container/container";
import EditAddressModal from "@/components/modals/edit-address-modal/edit-address-modal";
import RemoveAddressModal from "@/components/modals/remove-address-modal/remove-address-modal";

function AddressCard() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);

  return (
    <>
      <EditAddressModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
      <RemoveAddressModal
        isOpen={isRemoveModalOpen}
        onClose={() => setIsRemoveModalOpen(false)}
      />
      <address className={styles.address_card}>
        <Container>
          <h6 className={styles.username}>Jenny Swanson</h6>
          <div className={styles.address}>
            <DataCell
              dataName="address"
              dataValue="8424 James Lane South San Francisco, CA 94080"
            />
            <DataCell dataName="post code" dataValue="1216" />
            <DataCell dataName="phone number" dataValue="+880-1873-228724" />
          </div>
          <div className={styles.btns}>
            <Button label="edit" onClick={() => setIsEditModalOpen(true)} />
            <Button
              label="remove"
              variant="destructive"
              onClick={() => setIsRemoveModalOpen(true)}
            />
          </div>
        </Container>
      </address>
    </>
  );
}

export default memo(AddressCard);
