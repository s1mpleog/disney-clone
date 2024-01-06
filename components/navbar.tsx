import Image from "next/image";
import React from "react";
import { ModeToggle } from "./toogle-theme";
import SearchBox from "./search-box";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex relative justify-between z-50 items-center lg:mt-10 mt-5 lg:px-10 px-5">
      <div className="">
        <Link href="/">
          <Image
            className="dark:invert"
            src="/images/logo.png"
            alt="logo"
            height={100}
            width={120}
          />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-8">
        <SearchBox />
        <ModeToggle />
      </div>
    </nav>
  );
}
