import Image from "next/image";

const TextWithArrow = () => {
  return (
    <>
      <div className="mt-8 font-light">
        <p>
          Cenię sobie jakość wyrobu gotowego, dlatego korzystam jedynie z
          naturalnych i świeżych produktów.
        </p>
        <p>
          Zapraszam Cię do odwiedzenia mojego słodkiego świata -{" "}
          <span className="relative">
            zasmakuj go razem ze mną!{" "}
            <Image
              src="/media/home-page/arrow-about-me.svg"
              width={130}
              height={42.7}
              alt=""
              className="absolute right-2 rotate-12 top-2.5"
            />
          </span>
        </p>
      </div>
    </>
  );
};
export default TextWithArrow;
