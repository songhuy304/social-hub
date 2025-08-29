"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { GithubIcon, TwitterIcon } from "lucide-react";
import {
  Button,
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Typography,
  Flex,
} from "@/components";
import {
  registerSchema,
  type RegisterFormData,
} from "@/shared/schemas/register.schema";

interface RegisterFormProps {
  onSubmit?: (data: RegisterFormData) => void;
}

export function RegisterForm({ onSubmit }: RegisterFormProps) {
  const t = useTranslations("");

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleFormSubmit = (data: RegisterFormData) => {
    if (onSubmit) {
      onSubmit(data);
    }
  };

  return (
    <Flex direction="column" gap={6}>
      <Flex direction="column" gap={2} align="center">
        <Typography as="div" size="2xl" weight="bold">
          {t("Register.title")}
        </Typography>
        <Typography variant="muted">{t("Register.subtitle")}</Typography>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <Button variant="outline" type="button">
            <GithubIcon className="h-5 w-5" />
            <span className="sr-only">{t("Common.github")}</span>
          </Button>
          <Button variant="outline" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
            >
              <path d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z"></path>
            </svg>
            <span className="sr-only">{t("Common.google")}</span>
          </Button>
          <Button variant="outline" type="button">
            <TwitterIcon className="h-5 w-5" />
            <span className="sr-only">{t("Common.twitter")}</span>
          </Button>
        </div>
      </Flex>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)}>
          <Flex direction="column" gap={4}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Fields.email.label")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("Fields.email.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Fields.password.label")}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={t("Fields.password.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("Fields.confirmPassword.label")}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={t("Fields.confirmPassword.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full"
              loading={form.formState.isSubmitting}
            >
              {t("Common.signUp")}
            </Button>
          </Flex>
        </form>
      </Form>
    </Flex>
  );
}
