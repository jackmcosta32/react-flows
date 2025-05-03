import * as React from "react";

import { cn } from "@workspace/ui/lib/utils";

function Input({
  type,
  style,
  children,
  className,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <div
      style={style}
      className={cn(
        "relative flex content-center items-center",
        "selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-12 w-full min-w-0 rounded-md border bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none md:text-sm",
        "[&:has(input:focus-visible)]:border-ring [&:has(input:focus-visible)]:ring-ring/50 [&:has(input:focus-visible)]:ring-[3px]",
        "[&:has(input:disabled)]:pointer-events-none [&:has(input:disabled)]:cursor-not-allowed [&:has(input:disabled)]:opacity-50",
        "[&:has(input[aria-invalid=true])]:ring-destructive/20 [&:has(input[aria-invalid=true])]:dark:ring-destructive/40 [&:has(input[aria-invalid=true])]:border-destructive",
        className
      )}
    >
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground flex size-full min-w-0 rounded-md px-3 py-1 outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium"
        )}
        {...props}
      />

      {children}
    </div>
  );
}

export { Input };
