import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NAVBAR_LINKS } from "../data";
import Button from "../ui/Button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/Sheet";
import { Menu, MenuSquare } from "lucide-react";

const Navbar = () => {
  return (
    <header>
      <nav className="max-w-[100rem] mx-auto py-10 px-2 flex items-center justify-between ">
        <Link href="/">
          <Image src="/logo.svg" width={150} height={150} alt="Rouge's Logo" />
        </Link>
        <ul className="items-center gap-8 hidden lg:flex">
          {NAVBAR_LINKS.map((link, idx) => (
            <li
              key={idx}
              className="text-base font-semibold hover:underline underline-offset-2"
            >
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
          <Button>Let&apos;s Talk</Button>
        </ul>
        <div className="lg:hidden relative flex items-center">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-8 h-8" />
            </SheetTrigger>
            <SheetContent>
              <ul className="items-center gap-8 flex flex-col justify-center h-full">
                {NAVBAR_LINKS.map((link, idx) => (
                  <SheetClose
                    key={idx}
                    className="text-2xl font-semibold hover:underline underline-offset-2"
                  >
                    <Link href={link.href}>{link.title}</Link>
                  </SheetClose>
                ))}
                <Button>Let&apos;s Talk</Button>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
