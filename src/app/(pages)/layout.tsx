"use client";

import MainLayout from "@/components/layout/main-layout";

export default function WebappLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return <MainLayout>{props.children}</MainLayout>;
}
