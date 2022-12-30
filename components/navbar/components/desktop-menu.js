const DesktopMenu = () => {
  return (
    <>
      <div className="sm:hidden xl:flex justify-center">
        <ul className="flex text-lg font-medium desktop-menu">
          <li className="p-2 mx-2">
            <a href="#o-mnie">O mnie</a>
          </li>
          <li className="p-2 mx-2">
            <a href="#oferta">Oferta</a>
          </li>
          <li className="p-2 mx-2">
            <a href="#cennik">Cennik</a>
          </li>
          <li className="p-2 mx-2">
            <a href="#kontakt">Kontakt</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default DesktopMenu;
