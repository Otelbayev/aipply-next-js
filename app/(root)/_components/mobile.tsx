"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Mobile = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant={"outline"}
          size="icon"
          className="text-blue-700 border-blue-600"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
          <Image
            src={"/logo.png"}
            width={131}
            height={60}
            alt="logo"
            priority
          />
          <Separator className="my-3" />
          <SheetClose asChild>
            <Link
              href="/about"
              className={cn(
                "hover:bg-blue-400/20 my-2 mx-3 cursor-pointer font-semibold text-blue-700  rounded-sm p-2 transition-colors flex items-center gap-2",
                pathname === "/about" && "bg-blue-400/40"
              )}
            >
              Biz haqimizda
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <button
              className={
                "hover:bg-blue-400/20 my-2 mx-3 cursor-pointer font-semibold text-blue-700  rounded-sm p-2 transition-colors flex items-center gap-2"
              }
            >
              Kurslar
            </button>
          </SheetClose>
          <SheetClose asChild>
            <button
              className={
                "hover:bg-blue-400/20 my-2 mx-3 cursor-pointer font-semibold text-blue-700  rounded-sm p-2 transition-colors flex items-center gap-2"
              }
            >
              Kontakt
            </button>
          </SheetClose>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Mobile;
