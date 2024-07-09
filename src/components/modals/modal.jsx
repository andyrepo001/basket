"use client";
import styles from "./modal.module.css";
import { useCallback, useEffect, useState } from "react";
import Container from "../container/container";
import Button from "../button/button";
import Headers from "../headers/headers";

export default function Modal({
  isOpen,
  onClose,
  modalBody,
  modalHeader,
  modalIcon,
  position = "center",
  size = "md",
}) {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    {
      setShowModal(false);
      document.body.style.overflowY = "auto";

      setTimeout(() => {
        onClose();
      }, 300);
    }
  }, [onClose]);

  const variants = {
    size: {
      md: styles.md,
      lg: styles.lg,
    },

    position: {
      topCenter: styles.top_center,
    },
  };

  if (!isOpen) return null;
  return (
    <div className={styles.modal}>
      <div
        className={styles.backdrop}
        role="button"
        onClick={handleClose}
      ></div>
      <div
        className={`${styles.modal_wrapper} ${variants.position[position]} ${
          variants.size[size]
        } ${showModal ? styles.active : ""}`}
      >
        {/* Modal Header */}
        {(modalHeader || modalIcon) && (
          <div className={styles.modal_header}>
            <Container>
              <div className={styles.header_wrapper}>
                <Headers secondaryHeader={modalHeader} light />
                <Button
                  icon={modalIcon}
                  variant="close"
                  borderStyle="rounded"
                  size="sm"
                  ariaLabel="close modal"
                  onClick={handleClose}
                />
              </div>
            </Container>
          </div>
        )}

        {/* Modal Body */}
        <div className={styles.modal_body}>
          <Container>{modalBody}</Container>
        </div>
      </div>
    </div>
  );
}
