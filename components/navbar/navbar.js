import LogoMenu from "./components/logo";
import HamburgerMenu from "./components/hamburger-menu";
import DesktopMenu from "./components/desktop-menu";
import SocialIcons from "./components/social-icons";

const Navbar = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 items-center w-11/12 max-w-screen-2xl my-4">
        <LogoMenu />
        <DesktopMenu />
        <HamburgerMenu />
        <SocialIcons />
      </div>
    </>
  );
};
export default Navbar;
