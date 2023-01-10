const Copyright = () => {
  return (
    <>
      <div className="flex sm:justify-center md:justify-start border-t-2 border-footerGray mt-14">
        <p className="text-xs text-footerGray font-bold mt-3">
          Slodkoscibyjulia {new Date().getFullYear()} ©. Wszystkie prawa
          zastrzeżone.
        </p>
      </div>
    </>
  );
};
export default Copyright;
