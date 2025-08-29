"use client";

import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormDescription,
  Input,
  FormLabel,
} from "@/components/ui";
import { useFormContext } from "react-hook-form";

type InputFieldProps = {
  name?: string;
  label?: string;
  placeholder?: string;
  description?: string | React.ReactNode;
  type?: "text" | "email" | "number" | "tel" | "url";
  autoComplete?: string;
  disabled?: boolean;
};

export function InputField({
  name = "input",
  label,
  placeholder,
  description,
  type = "text",
  autoComplete,
  disabled = false,
}: InputFieldProps) {
  const { control, getFieldState } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              {...field}
              type={type}
              autoComplete={autoComplete}
              placeholder={placeholder}
              disabled={disabled}
              className={`${getFieldState(name).error && "text-destructive"}`}
            />
          </FormControl>
          <FormMessage />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  );
}
