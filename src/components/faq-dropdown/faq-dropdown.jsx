"use client";
import styles from "./faq-dropdown.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Container from "../container/container";
import Icon from "../icon/icon";

export default function FaqDropodown({ faq }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={styles.wrapper}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={styles.dropdown_header}
        style={isOpen ? { color: "var(--theme-color)" } : {}}
      >
        <Container>
          <div className={styles.header_items}>
            <p>{faq?.question}</p>
            <Icon icon={!isOpen ? ChevronDown : ChevronUp} size={24} />
          </div>
        </Container>
      </div>

      <div className={`${styles.content} ${isOpen ? styles.open : ""}`}>
        <Container>
          <p>{faq?.answer}</p>
        </Container>
      </div>
    </div>
  );
}
