"use client";
import styles from "./edit-profile-details-modal.module.css";
import { SaveAll, X } from "lucide-react";
import Modal from "../modal";
import Input from "@/components/input/input";
import Button from "@/components/button/button";

export default function EditProfileDetailsModal({ isOpen, onClose }) {
  const modalBody = (
    <form>
      <div className={styles.edit_form}>
        <Input placeholder="username" label="username" />
        <Input type="date" label="birthdate" />
        <Input
          label="Old passowrd"
          placeholder="old password"
          type="password"
        />
        <Input
          label="new password"
          placeholder="new password"
          type="password"
        />
        <Input label="phone number" placeholder="phone number" type="tel" />
      </div>
      <Button
        label="update information"
        variant="secondary"
        icon={SaveAll}
        type="submit"
      />
    </form>
  );

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        modalBody={modalBody}
        modalHeader="update profile information"
        modalIcon={X}
      />
    </>
  );
}
