"use client";

import React from "react";
import Header from "./header";

interface MainLayoutProps {
  children?: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="bg-gray-100 min-h-svh w-full flex flex-col">
      <Header />

      <main className="flex-1 px-6 xl:px-12 pt-6">{children}</main>
    </div>
  );
}
