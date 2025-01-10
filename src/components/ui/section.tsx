import { cn } from "@/lib/utils";
import * as React from "react";

const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      "bg-background px-4 py-12 text-foreground sm:py-24 md:py-32",
      className,
    )}
    {...props}
  />
));
Section.displayName = "Section";

export { Section };
