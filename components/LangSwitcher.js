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
        "w-full",
        "align-middle",
          "flex items-center justify-center",
          "gap-1",
          "cursor-pointer",
          "transition-colors duration-200",
          "text-primary" // Color de texto del Link activador
        )}
      >
        <FontAwesomeIcon icon={faGlobe} className="text-base" />
        <span>{currentLangAbbreviation}</span>
      </Link>

      {open && (
        <ul
          className={clsx(
            "absolute right-0 z-20",
            "flex !flex-col",
            "!gap-0",
            "mt-12",
            "w-fit",
            "bg-primary-50", // Fondo del menú: primary-50 de tu paleta
            "rounded-md", // Bordes redondeados del menú
            "shadow-lg", // Sombra del menú
            "border border-primary",
          )}
        >
          {Object.keys(lngs).map((lngKey) => (
            <li
              key={lngKey}
              onClick={() => handleSelect(lngKey)}
              className={clsx(
                "cursor-pointer",
                "rounded-md",
                "px-8 py-4", // Relleno de cada ítem
                "whitespace-nowrap",
                "text-primary", // Color del texto por defecto de los ítems: primary
                "hover:bg-primary-200", // Fondo en hover de los ítems: primary-100 (ajústalo si prefieres otro tono)
                "transition-colors duration-150",
                {
                  "font-semibold": i18n.language === lngKey, // Estilo del idioma activo: negrita y primary-700 (ajústalo si prefieres otro tono o peso)
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