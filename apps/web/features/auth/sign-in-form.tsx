"use client";

import * as z from "zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DataForm } from "@/components/form/data-form";
import { toast } from "@workspace/ui/components/sonner";
import { Button } from "@workspace/ui/components/button";
import { TextField } from "@/components/form/text-field";
import { PasswordField } from "@/components/form/password-field";

const formSchema = z.object({
  username: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export interface SignInFormProps extends React.ComponentProps<typeof DataForm> {
  onSubmit: (values: z.infer<typeof formSchema>) => void | Promise<void>;
}

export const SignInForm = ({ onSubmit, ...rest }: SignInFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const handleOnSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      if (typeof onSubmit === "function") {
        await onSubmit(values);
      }

      toast.success("You have been signed in successfully.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DataForm
      form={form}
      title="Sign in to your account"
      onValid={handleOnSubmit}
    >
      <TextField
        name="username"
        label="Username"
        type="email"
        placeholder="name@example.com"
        disabled={isLoading}
      />

      <PasswordField
        name="password"
        label="Password"
        placeholder="Enter your password"
        disabled={isLoading}
      />

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Signing in..." : "Sign in"}
      </Button>
    </DataForm>
  );
};
