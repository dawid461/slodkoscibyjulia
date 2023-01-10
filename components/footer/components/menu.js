const MenuFooter = () => {
  return (
    <>
      <div className="flex md:justify-center items-center">
        <ul className="flex sm:flex-col md:flex-row text-sm font-medium text-white">
          <li className="hover:opacity-70 ease-out duration-300 md:mx-1 lg:mx-3 xl:mx-5 my-3">
            <a href="#o-mnie">O mnie</a>
          </li>
          <li className="hover:opacity-70 ease-out duration-300 md:mx-1 lg:mx-3 xl:mx-5 my-3">
            <a href="#oferta">Oferta</a>
          </li>
          <li className="hover:opacity-70 ease-out duration-300 md:mx-1 lg:mx-3 xl:mx-5 my-3">
            <a href="#cennik">Cennik</a>
          </li>
          <li className="hover:opacity-70 ease-out duration-300 md:mx-1 lg:mx-3 xl:mx-5 my-3">
            <a href="#kontakt">Kontakt</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default MenuFooter;
