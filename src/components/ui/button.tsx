import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#4ADE80] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#4ADE80] text-[#09090B] font-semibold hover:bg-[#86EFAC] shadow-lg shadow-emerald-500/10",
        outline:
          "border border-white/10 bg-transparent text-[#FAFAFA] hover:bg-white/[0.04] hover:border-white/20",
        ghost:
          "text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-white/[0.04]",
        link: "text-[#4ADE80] underline-offset-4 hover:underline",
        secondary:
          "border border-[rgba(74,222,128,0.2)] bg-[rgba(74,222,128,0.04)] text-[#4ADE80] hover:bg-[rgba(74,222,128,0.08)] hover:border-[rgba(74,222,128,0.3)]",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-md px-4 text-xs",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-base font-semibold",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
