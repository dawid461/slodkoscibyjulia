import Image from "next/image";
const SocialIcons = () => {
  return (
    <>
      <div className="sm:hidden xl:flex justify-end">
        <a
          href="https://www.facebook.com/people/Slodkosci-by-Julia/100087049926281/"
          className="mx-1 hover:scale-125 transition ease-in-out duration-300 delay-100"
        >
          <Image src="/media/navbar/fb.svg" alt="" width={32} height={32} />
        </a>

        <a
          href="https://www.instagram.com/slodkoscibyjulia/"
          className="mx-1 hover:scale-125 transition ease-in-out duration-300 delay-100"
        >
          <Image src="/media/navbar/insta.svg" alt="" width={33} height={33} />
        </a>
      </div>
    </>
  );
};
export default SocialIcons;
