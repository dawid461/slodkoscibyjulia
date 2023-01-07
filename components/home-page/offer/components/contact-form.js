import Image from "next/image";

const ContactForm = () => {
  return (
    <>
      <div className="grid grid-cols-1 justify-items-center mt-11">
        <div className="flex flex-col items-center sm:w-full lg:w-3/4 bg-secondaryColor rounded-3xl sm:py-14 sm:px-7 md:px-28 md:py-20 xl:px-44 xl:py-24">
          <div className="flex w-full">
            <h4 className="font-semibold text-2xl">Napisz do mnie </h4>
            <Image
              src="/media/home-page/brown-heart.svg"
              width={32}
              height={23}
              alt=""
              className="ml-1.5"
            />
          </div>

          <form className="flex flex-col sm:items-center md:items-start w-full mt-6">
            <input
              type="text"
              name="name"
              placeholder="Imię*"
              className="w-full my-3 sm:px-2 md:px-8 py-4 bg-secondaryColor text-thirdColor placeholder:text-mediumGrey border-b border-mediumGrey outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="w-full my-3 sm:px-2 md:px-8 py-4 bg-secondaryColor text-thirdColor placeholder:text-mediumGrey border-b border-mediumGrey outline-none"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefon"
              className="w-full my-3 sm:px-2 md:px-8 py-4 bg-secondaryColor text-thirdColor placeholder:text-mediumGrey border-b border-mediumGrey outline-none"
            />
            <textarea
              name="message"
              placeholder="Wiadomość*"
              className="w-full my-3 sm:px-2 md:px-8 py-4 bg-secondaryColor text-thirdColor placeholder:text-mediumGrey border-b border-mediumGrey outline-none"
            ></textarea>

            <button
              className="flex justify-center items-center sm:w-52 sm:h-12 lg:w-60 lg:h-14 rounded-full bg-primaryColor hover:bg-darkBrown text-2xl text-white
            font-semibold hover:scale-110 ease-out duration-200 shadow-mediumGrey shadow-md mt-12"
            >
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactForm;
