"use client";

import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
  Input,
  Button,
  FormLabel,
} from "@/components/ui";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { createElement, useState } from "react";
import { useFormContext } from "react-hook-form";

type PasswordFieldProps = {
  name?: string;
  label?: string;
  placeholder?: string;
  description?: string | React.ReactNode;
};

export function PasswordField({
  name = "password",
  label,
  placeholder,
  description,
}: PasswordFieldProps) {
  const { control, getFieldState } = useFormContext();
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <div className="relative">
              <Input
                {...field}
                type={passwordVisibility ? "text" : "password"}
                autoComplete="on"
                placeholder={placeholder}
                className={`pr-12 ${
                  getFieldState(name).error && "text-destructive"
                }`}
              />
              <button
                className="absolute inset-y-0 right-0 flex items-center p-3 text-muted-foreground"
                type="button"
                onClick={() => setPasswordVisibility(!passwordVisibility)}
              >
                {createElement(passwordVisibility ? EyeOffIcon : EyeIcon, {
                  className: "h-4 w-4",
                })}
              </button>
            </div>
          </FormControl>
          <FormMessage />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
}
