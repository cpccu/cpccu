import { useState } from "react";
import GalleryScroll from "./GalleryScroll";

export default function GalleryScrollProvider({ children }) {
  const [scrollTarget, setScrollTarget] = useState(null);

  return (
    <GalleryScroll.Provider value={{ scrollTarget, setScrollTarget }}>
      {children}
    </GalleryScroll.Provider>
  );
}
