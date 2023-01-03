import Image from "next/image";
const ButtonBanner = () => {
  return (
    <>
      <a
        href="#about-me"
        className="flex justify-center items-center w-36 h-11 border-2 border-white rounded-full bg-darkBrown hover:bg-primaryColor hover:scale-110
        ease-out duration-200 mt-4"
      >
        <Image
          src="/media/home-page/arrow-down.svg"
          width={10}
          height={10}
          alt=""
        />
        <p className="text-white ml-1">Czytaj więcej</p>
      </a>
    </>
  );
};
export default ButtonBanner;
