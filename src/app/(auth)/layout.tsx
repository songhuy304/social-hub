import { Flex } from "@/components/ui";
import Image from "next/image";

export default function AuthLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <Flex align="center" justify="center" className="flex-1">
        <div className="w-full max-w-sm">{props.children}</div>
      </Flex>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/images/background.webp"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
