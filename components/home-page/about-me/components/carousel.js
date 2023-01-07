import Image from "next/image";

const Carousel = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center sm:gap-y-8 md:gap-y-16 xl:gap-y-8 sm:mt-20 xl:mt-24">
        <div className="flex flex-col justify-end sm:w-64 md:w-72 xl:w-64 h-96 rounded-3xl bg-portfolioImage3 bg-no-repeat bg-cover bg-center shadow-mediumGrey shadow-md">
          <div className="flex flex-col h-20 justify-center bg-white radius-carousel-text">
            <h4 className="text-xl font-semibold ml-7">Box</h4>
            <p className="text-lg font-medium ml-7">z słodkościami</p>
          </div>
        </div>

        <div className="flex flex-col justify-end sm:w-64 md:w-72 xl:w-64 h-96 rounded-3xl bg-portfolioImage2 bg-no-repeat bg-cover bg-center shadow-mediumGrey shadow-md">
          <div className="flex flex-col h-20 justify-center bg-white radius-carousel-text">
            <h4 className="text-xl font-semibold ml-7">Tort</h4>
            <p className="text-lg font-medium ml-7">z kwiatami</p>
          </div>
        </div>

        <div className="flex flex-col justify-end sm:w-64 md:w-72 xl:w-64 h-96 rounded-3xl bg-portfolioImage4 bg-no-repeat bg-cover bg-center shadow-mediumGrey shadow-md">
          <div className="flex flex-col h-20 justify-center bg-white radius-carousel-text">
            <h4 className="text-xl font-semibold ml-7">Tort</h4>
            <p className="text-lg font-medium ml-7">w kształcie bomby</p>
          </div>
        </div>

        <div className="flex flex-col justify-end sm:w-64 md:w-72 xl:w-64 h-96 rounded-3xl bg-portfolioImage1 bg-no-repeat bg-cover bg-center shadow-mediumGrey shadow-md">
          <div className="flex flex-col h-20 justify-center bg-white radius-carousel-text">
            <h4 className="text-xl font-semibold ml-7">Tort</h4>
            <p className="text-lg font-medium ml-7">urodzinowy</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end sm:mt-7 xl:mt-10">
        <button className="easy-out duration-200 hover:scale-125 mr-5">
          <Image
            src="/media/home-page/arrow-left.svg"
            width={40}
            height={25}
            alt=""
          />
        </button>

        <button className="easy-out duration-200 hover:scale-125 mr-5">
          <Image
            src="/media/home-page/arrow-right.svg"
            width={64}
            height={40}
            alt=""
          />
        </button>
      </div>
    </>
  );
};
export default Carousel;
