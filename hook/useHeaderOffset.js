// hooks/useHeaderOffset.js
import { useEffect, useState } from "react";

export default function useHeaderOffset() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      const header = document.querySelector("header");
      if (header) {
        setOffset(header.offsetHeight);
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return offset;
}
