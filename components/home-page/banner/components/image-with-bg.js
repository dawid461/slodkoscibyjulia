const ImageWithBg = () => {
  return (
    <>
      <div className="relative sm:w-64 sm:h-64 xl:w-96 xl:h-96 bg-primaryColor rounded-full sm:mt-14 xl:mt-0">
        <div className="absolute sm:-top-5 sm:right-7 xl:-top-8 xl:right-12 sm:w-64 sm:h-64 xl:w-96 xl:h-96 bg-profileImage bg-no-repeat bg-cover bg-center rounded-full" />
      </div>
    </>
  );
};
export default ImageWithBg;
