import { useState } from "react";
import OurMissionScroll from "./OurMessionScroll";

export default function OurMissionScrollProvider({ children }) {
  const [target, setTarget] = useState(null);

  return (
    <OurMissionScroll.Provider value={{ target, setTarget }}>
      {children}
    </OurMissionScroll.Provider>
  );
}
