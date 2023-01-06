import ButtonBanner from "./components/button";
import ImageWithBg from "./components/image-with-bg";
import HeadingWithDescription from "./components/heading-with-description";

const Banner = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center sm:w-11/12 2xl:w-9/12 max-w-screen-2xl xl:mt-10 xl:py-6">
        <div className="flex flex-col">
          <HeadingWithDescription />
          <ButtonBanner />
        </div>
        <div className="flex justify-center">
          <ImageWithBg />
        </div>
      </div>
    </>
  );
};
export default Banner;
