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
        "fixed top-0 z-header h-navbar w-screen gap-x-6 border-b bg-white px-6 shadow-1 flex items-center xl:gap-x-12 xl:px-12",
        className
      )}
    >
      <Link href="/" className="">
        <span className="text-2xl font-bold">SocialHub</span>
      </Link>

      <div className="h-full min-w-layout-main-pane max-w-layout-main-pane grow gap-x-6 flex items-center">
        <nav className="flex h-full items-end"></nav>
        <div className="flex h-fit w-full">
          <SearchBox />
        </div>
      </div>

      <UserDropdown />
    </header>
  );
};

export default Header;
