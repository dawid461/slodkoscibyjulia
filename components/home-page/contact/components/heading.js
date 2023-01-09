import Image from "next/image";

const Heading = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-sm text-primaryColor font-bold">KONTAKT</h2>
        <div className="flex mt-2">
          <h3 className="text-2xl text-medium leading-7 mr-2">
            Serdecznie zapraszam!
          </h3>
          <Image
            src="/media/home-page/heart-banner.svg"
            width={32}
            height={26}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default Heading;
