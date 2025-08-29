"use client";

import { LoginForm } from "@/components";
import { setLoginState, useAppDispatch } from "@/shared/reducers";
import { LoginFormData } from "@/shared/schemas";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const t = useTranslations("");
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const mockLogin = async (data: LoginFormData): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const isValidCredentials =
      data.email === "admin@gmail.com" && data.password === "admin123";

    if (!isValidCredentials) {
      throw new Error("errorMessage.invalidCredentials");
    }

    return true;
  };

  const handleLogin = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      const success = await mockLogin(data);
      if (success) {
        dispatch(setLoginState());
        router.push("/");
      }
    } catch (err) {
      toast.error(t("errorMessage.invalidCredentials"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <LoginForm onSubmit={handleLogin} isLoading={isLoading} />

      <div className="text-center text-sm">
        <span className="text-muted-foreground">{t("Login.noAccount")} </span>
        <Link href="/register" className="text-blue-600 hover:underline">
          {t("Common.signUp")}
        </Link>
      </div>
    </div>
  );
}
