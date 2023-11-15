import Link from "next/link";
import MainNav from "./MainNav";
import getCategories from "@/actions/getCategories";
import NavbarActions from "./NavbarActions";
import Image from "next/image";
import logo from "../app/assets/Mcode.tsx.svg";
import MobileMenu from "./ui/MobileMenu";

export default async function Navbar() {
  const categories = await getCategories();
  return (
    <div>
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        <MobileMenu categories={categories} />
        <Link
          href="/"
          className="ml-4 flex lg:ml-0 gap-x-2 w-full md:w-auto md:justify-normal justify-center mx-auto md:mx-0"
        >
          <Image src={logo} alt="logo" className="w-24" />
        </Link>
        <MainNav data={categories} />
        <NavbarActions />
      </div>
    </div>
  );
}
