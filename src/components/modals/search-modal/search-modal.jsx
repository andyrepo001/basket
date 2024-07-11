"use client";
import InputButton from "@/components/input-with-button/input-with-button";
import Modal from "../modal";
import { useSearchModal } from "@/hooks/use-search-modal";
import { Search } from "lucide-react";

export default function SearchModal() {
  const { isOpen, onClose } = useSearchModal();

  const modalbody = (
    <InputButton placeholder="search products" buttonIcon={Search} />
  );

  return (
    <>
      <Modal modalBody={modalbody} isOpen={isOpen} onClose={onClose} />
    </>
  );
}
