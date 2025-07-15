"use client";

import React, { useState, useEffect, useRef } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import styles from "./LangDropdown.module.css";

const LangDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Eng");
  const wrapperRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (lang: string) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <div
        className={`${styles.dropdownContainer} ${
          isOpen ? styles.open : ""
        }`}
      >
        <button className={styles.toggleButton} onClick={toggleDropdown}>
          {selectedLang}
          <span className={styles.langArrow}>
            <span
              className={`${styles.arrowIcon} ${
                isOpen ? styles.visible : ""
              }`}
            >
              <SlArrowUp />
            </span>
            <span
              className={`${styles.arrowIcon} ${
                !isOpen ? styles.visible : ""
              }`}
            >
              <SlArrowDown />
            </span>
          </span>
        </button>

        {["Eng", "Aze", "Rus"]
          .filter((lang) => lang !== selectedLang)
          .map((lang) => (
            <button
              key={lang}
              onClick={() => handleSelect(lang)}
              className={`${styles.item} ${isOpen ? styles.open : ""}`}
            >
              {lang}
            </button>
          ))}
      </div>
    </div>
  );
};

export default LangDropdown;
