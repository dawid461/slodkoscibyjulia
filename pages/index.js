import Head from "next/head";
import Banner from "../components/home-page/banner/banner";
import Navbar from "../components/navbar/navbar";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Słodkości najwyższej jakości" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex flex-col w-full items-center my-2 py-2">
        <Navbar />
      </nav>

      <main className="flex flex-col w-full items-center my-8 xl:py-10 border-2">
        <Banner />
      </main>

      <footer className="flex flex-col w-full items-center border-2">
        <h2>footer</h2>
      </footer>
    </>
  );
};
export default Home;
