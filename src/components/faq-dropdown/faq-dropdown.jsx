"use client";
import styles from "./faq-dropdown.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Container from "../container/container";
import Icon from "../icon/icon";
import Headers from "../headers/headers";
import Text from "../text/text";

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
            <Headers primaryHeader={faq?.question} capitalize={false} />
            <Icon icon={!isOpen ? ChevronDown : ChevronUp} size={24} />
          </div>
        </Container>
      </div>

      <div className={`${styles.content} ${isOpen ? styles.open : ""}`}>
        <Container>
          <Text>{faq?.answer}</Text>
        </Container>
      </div>
    </div>
  );
}
