import Image from "next/image";

const Heading = () => {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-sm text-primaryColor font-bold">OFERTA</h2>
        <h3 className=" text-2xl text-medium leading-7 mt-2">
          Chcesz poznać słodką ofertę lub złożyć{" "}
          <br className="sm:hidden md:block" />
          zamówienie?
        </h3>
      </div>
    </>
  );
};
export default Heading;
