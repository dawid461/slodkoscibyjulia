import "../styles/globals.css";
//pages /_app.js;
import { Plus_Jakarta_Sans } from "@next/font/google";

const font = Plus_Jakarta_Sans();

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${font.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
