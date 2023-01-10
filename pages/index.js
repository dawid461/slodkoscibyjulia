import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import Banner from "../components/home-page/banner/banner";
import AboutMe from "../components/home-page/about-me/about-me";
import Offer from "../components/home-page/offer/offer";
import PriceList from "../components/home-page/price-list/price-list";
import Contact from "../components/home-page/contact/contact";
import Footer from "../components/footer/footer";

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

      <main className="flex flex-col w-full items-center my-8">
        <Banner />
        <AboutMe />
        <Offer />
        <PriceList />
        <Contact />
      </main>

      <footer className="flex flex-col w-full items-center bg-footerBrown ">
        <Footer />
      </footer>
    </>
  );
};
export default Home;
