import ContactHeader from "../CONTACT/ContactHeader";
import ContactMain from "../CONTACT/ContactMain";
import ContactScrollProvider from "./../../Context/ContactScroll/ContactScrollProvider";

export default function Contact() {
  return (
    <ContactScrollProvider>
      <ContactHeader />
      <ContactMain />
    </ContactScrollProvider>
  );
}
