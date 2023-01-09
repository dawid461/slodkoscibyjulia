import Heading from "./components/heading";
import ListAndText from "./components/list-and-text";

const PriceList = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:w-11/12 2xl:w-9/12 max-w-screen-2xl py-8 mt-10">
        <Heading />
        <ListAndText />
      </div>
    </>
  );
};
export default PriceList;
