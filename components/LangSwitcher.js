"use client";

import { useState } from "react"; // Importa useState
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx"; // Importa clsx (útil para clases condicionales)

const lngs = {
  en: {
    nativeName: "English",
    abbreviation: "EN",
  },
  es: {
    nativeName: "Español", // Corregido a "Español" para el menú
    abbreviation: "ES",
  },
  // Añade otros idiomas si es necesario, como en tu primer ejemplo:
  // fi: { nativeName: "Suomeksi", abbreviation: "FI" },
  // sr: { nativeName: "Srpski", abbreviation: "SR" },
};

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false); // Estado para controlar el menú

  const handleSelect = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false); // Cierra el menú al seleccionar
  };

  // Obtiene la abreviación del idioma actual para mostrarla en el botón
  const currentLangAbbreviation = lngs[i18n.language]?.abbreviation || "EN";

  return (
    // Contenedor principal con posición relativa para el menú absoluto
    <div className="relative inline-block">
      {/* Botón que alterna la visibilidad del menú */}
      <button
        onClick={() => setOpen(!open)}
        className={clsx(
          "flex items-center gap-1", // Icono y texto en línea, con espacio
          "px-3 py-1.5", // Relleno del botón (ajusta según Figma)
          "rounded-full", // Bordes redondeados (ajusta: rounded-md, rounded-lg, etc.)
          "border border-solid", // Borde del botón
          "cursor-pointer", // Indica que es clickeable
          "transition-colors duration-200", // Transición para hover/estado abierto
          {
            // Estilos cuando el menú está abierto (ejemplo con colores azules/morados de Figma)
            "bg-blue-100 border-blue-500 text-blue-700": open, // Ajusta colores y opacidad
            // Estilos cuando el menú está cerrado (ejemplo con colores neutros)
            "bg-transparent border-gray-300 text-gray-700 hover:bg-gray-100": !open, // Ajusta colores y hover
          }
        )}
      >
        {/* Icono de globo */}
        <FontAwesomeIcon icon={faGlobe} className="icon" />
        {/* Muestra solo la abreviación del idioma actual */}
        <span>{currentLangAbbreviation}</span>
      </button>

      {/* Menú Desplegable (visible solo si 'open' es true) */}
      {open && (
        <ul
          className={clsx(
            "absolute right-0 z-20", // Posición a la derecha, encima de otros elementos
            "mt-2", // Margen superior (ajusta)
            "w-fit", // Ancho ajustado al contenido
            "bg-white", // Fondo blanco (ajusta color)
            "rounded-md", // Bordes redondeados (ajusta)
            "shadow-lg", // Sombra (ajusta)
            "py-1", // Relleno vertical interno
            "border border-gray-200" // Borde sutil (ajusta color)
          )}
        >
          {Object.keys(lngs).map((lngKey) => (
            <li
              key={lngKey}
              onClick={() => handleSelect(lngKey)}
              className={clsx(
                "cursor-pointer",
                "px-4 py-2", // Relleno de cada ítem (ajusta)
                "whitespace-nowrap", // Evita que el texto se rompa
                "text-gray-800", // Color del texto por defecto (ajusta)
                "hover:bg-gray-100", // Fondo en hover (ajusta color)
                "transition-colors duration-150", // Transición en hover
                {
                  // Estilo para el idioma activo
                  "font-semibold text-blue-600": i18n.language === lngKey, // Negrita y color diferente (ajusta)
                  "font-normal": i18n.language !== lngKey,
                }
              )}
            >
              {/* Muestra "Nombre Nativo - Abreviación" como en el prototipo de Figma */}
              {`${lngs[lngKey].nativeName} - ${lngs[lngKey].abbreviation}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}