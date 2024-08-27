import { useState } from "react";
import ContactScroll from "./ContactScroll";

export default function ContactScrollProvider({ children }) {
  const [target, setTarget] = useState(null);
  return (
    <ContactScroll.Provider value={{ target, setTarget }}>
      {children}
    </ContactScroll.Provider>
  );
}
