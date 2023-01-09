import Image from "next/image";

const Heading = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-sm text-primaryColor font-bold">CENNIK</h2>
        <h3 className="text-2xl text-medium leading-7 mt-2">
          Co składa się na cenę gotowego wyrobu,{" "}
          <br className="sm:hidden md:block" />
          który otrzymujesz?
        </h3>
      </div>
    </>
  );
};
export default Heading;
