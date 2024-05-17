import { useState } from "react";
import BlogScroll from "./BlogScroll";

export default function BlogScrollProvider({ children }) {
  const [blogTarget, setBlogTarget] = useState(null);

  return (
    <BlogScroll.Provider value={{ blogTarget, setBlogTarget }}>
      {children}
    </BlogScroll.Provider>
  );
}
