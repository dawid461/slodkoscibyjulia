import Image from "next/image";

const Heading = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-sm text-primaryColor font-bold">O MNIE</h2>
        <h3 className=" text-2xl text-medium leading-7 mt-2">
          Wszystkie słodkości | torty | makaroniki
          <br />
          <span className="relative">
            {" "}
            wykonuję własnoręcznie
            <Image
              src="/media/home-page/underline.svg"
              width={169}
              height={8.5}
              alt=""
              className="absolute -right-1"
            />
          </span>
        </h3>
      </div>
    </>
  );
};
export default Heading;
