import Image from "next/image";
import Link from "next/link";

const LogoFooter = () => {
  return (
    <>
      <Link href="/">
        <Image
          src="/media/footer/logo-white.svg"
          width={200}
          height={40}
          alt=""
        />
      </Link>
    </>
  );
};
export default LogoFooter;
