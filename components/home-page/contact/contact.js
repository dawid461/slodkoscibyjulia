import Cards from "./components/cards";
import Heading from "./components/heading";

const Contact = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:w-11/12 2xl:w-9/12 max-w-screen-2xl py-8 mt-10">
        <Heading />
        <Cards />
      </div>
    </>
  );
};
export default Contact;
