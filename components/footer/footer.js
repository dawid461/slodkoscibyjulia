import Copyright from "./components/copyright";
import LogoFooter from "./components/logo";
import MenuFooter from "./components/menu";
import SocialIconsFooter from "./components/social-media";
//flex sm:flex-col md:flex-row justify-between
const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:w-11/12 2xl:w-9/12 max-w-screen-2xl py-6 mt-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 sm:ml-3 md:ml-0">
          <LogoFooter />
          <MenuFooter />
          <SocialIconsFooter />
        </div>

        <Copyright />
        <p className="text-center text-xs text-white mt-8">
          Made with 💛 by{" "}
          <a
            href="https://nordbay.com/"
            className="hover:opacity-70 duration-300 ease-out"
          >
            Nordbay.com
          </a>
        </p>
      </div>
    </>
  );
};
export default Footer;
