import Image from "next/image";

const HeadingWithDescription = () => {
  return (
    <>
      <div className="flex">
        <h1 className="text-3xl font-light mr-2">Cześć!</h1>
        <Image
          src="/media/home-page/heart-banner.svg"
          width={32}
          height={26}
          alt=""
        />
      </div>

      <div className="flex flex-col mt-3">
        <p className="font-light">
          Jestem Julia - ciastkarka z pasją do tworzenia wysokiej jakości
          słodkości, które nie tylko dobrze smakują, ale również świetnie
          wyglądają!
          <br /> Nieustannie staram się być lepsza w tym co robię, dlatego
          jestem otwarta na nowe cukiernicze wyzwania.
        </p>
        <p className="text-xs font-semibold mt-4">
          słodkości
          <span className="border-x border-y-2 font-semibold border-primaryColor rounded-2xl bg-primaryColor mx-2" />
          torty
          <span className="border-x border-y-2 font-semibold border-primaryColor rounded-2xl bg-primaryColor mx-2" />
          makaroniki
        </p>
      </div>
    </>
  );
};
export default HeadingWithDescription;
