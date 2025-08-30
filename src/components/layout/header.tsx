"use client";

import SearchBox from "@/components/feature/search-box/search-box";
import { UserDropdown } from "@/components/ui";
import { cn } from "@/shared/utils";
import Link from "next/link";
import React from "react";

type HeaderProps = {
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        "bg-background sticky top-0 z-50 border-b h-navbar xl:px-12 px-6",
        className
      )}
    >
      <div className="container grid grid-cols-[1fr_550px_1fr] xl:gap-x-12 gap-x-6 items-center h-full">
        <Link href="/">
          <span className="text-2xl font-bold">SocialHub</span>
        </Link>

        <div>
          <SearchBox />
        </div>

        <div className="flex justify-end">
          <UserDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;
