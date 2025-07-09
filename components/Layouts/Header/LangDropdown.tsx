import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const Wrapper = styled.div`
  position: relative;
`;

const ToggleButton = styled.button`
  align-self: center;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: #fff;
  min-width: 90px;
  padding: 14px;
  height: 44px;
  border-radius: 24px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

const DropdownContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 4px;
  right: 0;
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 24px;
  height: ${({ $isOpen }) => ($isOpen ? "112px" : "44px")};
  display: flex;
  flex-direction: column;
  z-index: 1001;
  min-width: 90px;
  align-items: center;
  overflow: hidden;
  transition: height 0.5s ease-in-out;
`;

const Item = styled.button<{ $isOpen?: boolean }>`
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: #fff;
  width: 100%;
  padding: 0 20px 12px;
  height: 32px;
  border: none;
  font-size: 14px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  transition: opacity 0.3s;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};

  &:hover {
    opacity: 0.9;
  }
`;

const LangArrow = styled.span`
  margin-left: 8px;
  display: flex;
  align-items: center;
  position: relative;
  width: 16px;
  height: 16px;
`;

const ArrowIcon = styled.span<{ $visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0)" : "translateY(6px)"};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
`;

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
    <Wrapper ref={wrapperRef}>
      <DropdownContainer $isOpen={isOpen}>
        <ToggleButton onClick={toggleDropdown}>
          {selectedLang}
          <LangArrow>
            <ArrowIcon $visible={isOpen}>
              <SlArrowUp />
            </ArrowIcon>
            <ArrowIcon $visible={!isOpen}>
              <SlArrowDown />
            </ArrowIcon>
          </LangArrow>
        </ToggleButton>

        {["Eng", "Aze", "Rus"]
          .filter((lang) => lang !== selectedLang)
          .map((lang) => (
            <Item
              key={lang}
              $isOpen={isOpen}
              onClick={() => handleSelect(lang)}
            >
              {lang}
            </Item>
          ))}
      </DropdownContainer>
    </Wrapper>
  );
};

export default LangDropdown;
