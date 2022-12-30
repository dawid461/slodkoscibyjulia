import Image from "next/image";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="sm:flex xl:hidden justify-end">
        <button>
          <Image
            src="/media/navbar/hamburger.svg"
            alt=""
            width={36}
            height={36}
          />
        </button>

        <ul className="hidden">
          <li>
            <a href="#">O mnie</a>
          </li>
          <li>
            <a href="#">Oferta</a>
          </li>
          <li>
            <a href="#">Cennik</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default HamburgerMenu;
