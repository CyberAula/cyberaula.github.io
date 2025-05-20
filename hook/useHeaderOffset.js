import { useEffect, useState } from "react";

export default function useHeaderOffset(selector = "header") {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      const header = document.querySelector(selector);
      if (header) {
        // solo mide la altura del header base (sin incluir menú abierto)
        const rect = header.getBoundingClientRect();
        setOffset(rect.height);
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, [selector]);

  return offset;
}
