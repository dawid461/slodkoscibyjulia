import LogoMenu from "./components/logo";
import HamburgerMenu from "./components/hamburger-menu";
import DesktopMenu from "./components/desktop-menu";
import SocialIcons from "./components/social-icons";

const Navbar = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 items-center sm:w-11/12 2xl:w-9/12 max-w-screen-2xl">
        <LogoMenu />
        <DesktopMenu />
        <HamburgerMenu />
        <SocialIcons />
      </div>
    </>
  );
};
export default Navbar;
