import Image from "next/image";
import Link from "next/link";

const LogoMenu = () => {
  return (
    <>
      <div className="flex justify-start">
        <Link href="/">
          <Image src="/media/navbar/logo.svg" alt="" width={350} height={60} />
        </Link>
      </div>
    </>
  );
};
export default LogoMenu;
