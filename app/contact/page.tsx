// app/contact/page.js or pages/contact.js (depending on your project structure)

import Header from "@/app/component/Header";
import Footer from "@/app/component/footer";
import ContactBanner from "@/app/component/contact/contact_hero";
import ContactForm from "@/app/component/contact/ContactForm";
// import ContactFormm from "@/app/component/contact/contactformm";
import ContactSection from "@/app/component/contact/contact_bottom";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <ContactBanner />
      <ContactForm />
      {/* <ContactFormm /> */}
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ContactPage;
