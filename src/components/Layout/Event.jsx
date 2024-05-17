import NoticeSection from "../EVENT/NoticeSection";
import EventScrollProvider from "../../Context/EventScroll/EventScrollProvider";
import EventHeader from "../EVENT/EventHeader";

export default function Event() {
  return (
    <EventScrollProvider>
      <EventHeader />
      <NoticeSection />
    </EventScrollProvider>
  );
}
