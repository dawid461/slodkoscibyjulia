import Carousel from "./components/carousel";
import Heading from "./components/heading";
import TextWithArrow from "./components/text-with-arrow";

const AboutMe = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:w-11/12 2xl:w-9/12 max-w-screen-2xl py-8 mt-10">
        <Heading />
        <TextWithArrow />
        <Carousel />
      </div>
    </>
  );
};
export default AboutMe;
