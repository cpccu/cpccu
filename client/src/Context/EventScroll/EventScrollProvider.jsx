import React, { useRef, useState } from "react";
import EventScroll from "./EventScroll";

export default function EventScrollProvider({ children }) {
  const [scrollTarget, setScrollTarget] = useState(null);

  return (
    <EventScroll.Provider value={{ scrollTarget, setScrollTarget }}>
      {children}
    </EventScroll.Provider>
  );
}
