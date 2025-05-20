"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import Link from "next/link";

const lngs = {
  en: {
    nativeName: "English",
    abbreviation: "EN",
  },
  es: {
    nativeName: "Español",
    abbreviation: "ES",
  },
};

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleSelect = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  const currentLangAbbreviation = lngs[i18n.language]?.abbreviation || "EN";

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLinkClick = (event) => {
    event.preventDefault();
    setOpen(!open);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <Link
        href="#"
        onClick={handleLinkClick}
        className={clsx(
          "w-full",
          "flex justify-center",
          "items-center",
          "gap-1",
          "cursor-pointer",
          "transition-colors duration-200",
          "text-primary"
        )}
      >
        <FontAwesomeIcon icon={faGlobe} className="text-base" />
        <span>{currentLangAbbreviation}</span>
      </Link>

      {open && (
        <ul
          className={clsx(
            "absolute z-20",
            "flex !flex-col",
            "!gap-0",
            "mt-2 sm:mt-12",
            "w-fit",
            "bg-primary-50",
            "rounded-md",
            "shadow-lg",
            "border border-primary",
            "left-1/2 -translate-x-1/2",
            "sm:left-auto sm:right-0 sm:translate-x-0"
          )}
        >
          {Object.keys(lngs).map((lngKey) => (
            <li
              key={lngKey}
              onClick={() => handleSelect(lngKey)}
              className={clsx(
                "cursor-pointer",
                "rounded-md",
                "px-8 py-4", // <--- CORRECCIÓN AQUÍ
                "whitespace-nowrap",
                "text-primary",
                "hover:bg-primary-200",
                "transition-colors duration-150",
                {
                  "font-semibold": i18n.language === lngKey,
                  "font-normal": i18n.language !== lngKey,
                }
              )}
            >
              {`${lngs[lngKey].nativeName} - ${lngs[lngKey].abbreviation}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}