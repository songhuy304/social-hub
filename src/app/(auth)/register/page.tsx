import { RegisterForm } from "@/components";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function RegisterPage() {
  const t = useTranslations("");
  return (
    <div className="space-y-6">
      <RegisterForm />

      <div className="text-center text-sm">
        <span className="text-muted-foreground">
          {t("Register.haveAccount")}{" "}
        </span>
        <Link href="/login" className="text-blue-600 hover:underline">
          {t("Common.signIn")}
        </Link>
      </div>
    </div>
  );
}
