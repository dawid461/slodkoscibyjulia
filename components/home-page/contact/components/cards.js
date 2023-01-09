import Image from "next/image";
const Cards = () => {
  return (
    <>
      <div className="flex sm:flex-col md:flex-row justify-center items-center mt-10">
        <a href="tel:+48 515 070 548">
          <div
            className="sm:w-72 md:w-80 h-52 flex flex-col items-center hover:bg-primaryColor border border-CardsGrey rounded-3xl
         duration-300 ease-out shadow hover:text-white change-svg-color-hover md:px-2 pt-8"
          >
            <Image
              src="/media/home-page/phone.svg"
              width={50}
              height={50}
              alt=""
              className="hover:fill-white"
            />
            <h4 className="text-xl font-semibold">Telefon</h4>
            <p className="text-lg font-medium">+48 515 070 548</p>
            <span className="text-xs text-center mt-2">
              Gdybym nie mogła odebrać proszę o zostawienie wiadomości SMS
            </span>
          </div>
        </a>

        <a href="mailto:kontakt@slodkoscibyjulia.pl">
          <div
            className="sm:w-72 md:w-80 h-52 flex flex-col items-center hover:bg-primaryColor border border-CardsGrey rounded-3xl
         duration-300 ease-out shadow hover:text-white change-svg-color-hover md:px-2 pt-8 sm:mt-10 md:mt-0 md:ml-20 2xl:ml-28"
          >
            <Image
              src="/media/home-page/mail.svg"
              width={50}
              height={50}
              alt=""
              className="hover:fill-white"
            />
            <h4 className="text-xl font-semibold">E-mail</h4>
            <p className="text-lg font-medium">kontakt@slodkoscibyjulia.pl</p>
          </div>
        </a>
      </div>
    </>
  );
};
export default Cards;
