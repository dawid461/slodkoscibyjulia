import Image from "next/image";
const SocialIconsFooter = () => {
  return (
    <>
      <div className="flex md:justify-end mt-4">
        <a
          href="https://www.facebook.com/people/Slodkosci-by-Julia/100087049926281/"
          className="mx-1 hover:scale-125 transition ease-in-out duration-300 delay-100"
        >
          <Image
            src="/media/footer/fb-white.svg"
            alt=""
            width={24}
            height={24}
          />
        </a>

        <a
          href="https://www.instagram.com/slodkoscibyjulia/"
          className="mx-1 hover:scale-125 transition ease-in-out duration-300 delay-100"
        >
          <Image
            src="/media/footer/ig-white.svg"
            alt=""
            width={24}
            height={24}
          />
        </a>
      </div>
    </>
  );
};
export default SocialIconsFooter;
