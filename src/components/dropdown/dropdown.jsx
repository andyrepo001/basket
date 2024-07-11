import styles from "./dropdown.module.css";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Container from "../container/container";
import Icon from "../icon/icon";

function DropdownTrigger({ children, onOpen }) {
  return (
    <div className={styles.dropdown_trigger} role="button" onClick={onOpen}>
      <div>{children}</div>
    </div>
  );
}

function DropdownContent({ children, isOpen, onClose }) {
  const dropdownRef = useRef(null);

  const handleClick = (event) => {
    if (isOpen && !dropdownRef?.current?.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClick);
    }

    return () => document.removeEventListener("click", handleClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className={styles.dropdown_content} ref={dropdownRef}>
          <Container>
            <div className={styles.items}>{children}</div>
          </Container>
        </div>
      )}
    </>
  );
}

function DropdownItem({ content, onClose }) {
  const handleClick = (event) => {
    event.stopPropagation();
    onClose();
  };

  return (
    <Link
      href={content?.slug ? content?.slug : "#"}
      className={`button ${styles.dropdown_item}`}
      tabIndex="0"
      onClick={handleClick}
    >
      <div className={styles.content}>
        {content?.label && <span>{content?.label}</span>}
        <Icon icon={content?.icon} />
      </div>
    </Link>
  );
}

const Dropdown = { DropdownTrigger, DropdownContent, DropdownItem };
export default Dropdown;
