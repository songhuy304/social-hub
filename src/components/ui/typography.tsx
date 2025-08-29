import { cn } from "@/shared/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const typographyVariants = cva(
  "text-foreground transition-all duration-300 inline-flex items-center gap-1",
  {
    variants: {
      variant: {
        default: "text-foreground",
        primary: "text-primary",
        secondary: "text-secondary",
        muted: "text-muted-foreground",
        subtle: "text-muted-foreground/80",
        destructive: "text-destructive",
        success: "text-green-600 dark:text-green-500",
        link: "text-blue-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "text-base leading-7",
        xs: "text-xs leading-tight",
        sm: "text-sm leading-snug",
        md: "text-base leading-7",
        lg: "text-lg leading-relaxed",
        xl: "text-xl leading-relaxed",
        "2xl": "text-2xl leading-relaxed",
      },
      weight: {
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      weight: "normal",
    },
  }
);

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographyVariants> {
  as?: "p" | "span" | "div";
  isCopy?: boolean;
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  (
    {
      className,
      variant,
      size,
      weight,
      as = "p",
      isCopy = false,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as;

    return (
      <Component
        className={cn(
          typographyVariants({ variant, size, weight, className }),
          isCopy && "group"
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Typography.displayName = "Typography";

export { Typography, typographyVariants };
