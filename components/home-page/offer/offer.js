import ContactForm from "./components/contact-form";
import Heading from "./components/heading";

const Offer = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:w-11/12 2xl:w-9/12 max-w-screen-2xl py-8 mt-10" id="oferta">
        <Heading />
        <ContactForm />
      </div>
    </>
  );
};
export default Offer;
