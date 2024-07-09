import styles from "../add-address-modal/add-address-modal.module.css";
import { SaveAll, X } from "lucide-react";
import Modal from "../modal";
import Input from "@/components/input/input";
import Button from "@/components/button/button";

export default function EditAddressModal({ isOpen, onClose }) {
  const modalBody = (
    <form>
      <div className={styles.address_form}>
        <Input label="street addreess" placeholder="street addreess" />
        <Input label="state/county" placeholder="state/county" />

        <Input label="post code" placeholder="postal code" type="number" />
        <Input label="country" placeholder="country name" />

        <Input label="phone number" placeholder="phone number" type="tel" />
      </div>
      <Button
        variant="secondary"
        icon={SaveAll}
        label="save address"
        type="submit"
      />
    </form>
  );

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        modalHeader="edit address"
        modalIcon={X}
        modalBody={modalBody}
      />
    </>
  );
}
