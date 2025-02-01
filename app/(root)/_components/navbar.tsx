import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Mobile from "./mobile";

const Navbar = () => {
  return (
    <div className="max-w-6xl mx-auto px-2 flex items-center justify-between h-[9dvh]">
      <div className="md:hidden flex">
        <Mobile />
      </div>
      <Link href="/">
        <Image src={"/logo.png"} width={131} height={60} alt="logo" priority />
      </Link>
      <div className="hidden md:flex items-center gap-4 ">
        <Link href="/about" className="font-semibold text-blue-700">
          Biz haqimizda
        </Link>
        <button className="font-semibold text-blue-700">Kurslar</button>
        <Link href="/" className="font-semibold text-blue-700">
          Kontakt
        </Link>
      </div>
      <Button className="rounded-2xl bg-gr">Barcha Kurslar</Button>
    </div>
  );
};

export default Navbar;
