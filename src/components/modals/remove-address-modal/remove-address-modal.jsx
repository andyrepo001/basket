import styles from "./remove-address-modal.module.css";
import Modal from "../modal";
import Headers from "@/components/headers/headers";
import Button from "@/components/button/button";

export default function RemoveAddressModal({ isOpen, onClose }) {
  const handleClose = () => {
    document.body.style.overflowY = "auto";
    onClose();
  };

  const modalBody = (
    <div>
      <Headers
        secondaryHeader="are you sure you want to remove this address?"
        customStyles={{ textAlign: "center" }}
      />
      <div className={styles.buttons}>
        <Button label="proceed" variant="destructive" onClick={handleClose} />
        <Button label="go back" onClick={handleClose} />
      </div>
    </div>
  );

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} modalBody={modalBody} />
    </>
  );
}
