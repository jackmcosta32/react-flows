import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  useFormField,
  FormDescription,
} from "@workspace/ui/components/form";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@workspace/ui/components/input";
import { Button } from "@workspace/ui/components/button";

export interface PasswordFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  hideFormMessage?: boolean;
}

export const PasswordField = ({
  name,
  label,
  className,
  description,
  placeholder,
  hideFormMessage = false,
  ...rest
}: PasswordFieldProps) => {
  const formField = useFormField();
  const [showPassword, setShowPassword] = useState(false);

  const fieldType = showPassword ? "text" : "password";
  const FieldIcon = showPassword ? Eye : EyeOff;

  const toggleFieldType = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormField
      name={name}
      control={formField.control}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <Input
              type={fieldType}
              {...rest}
              onChange={field.onChange}
              placeholder={placeholder}
              value={field.value}
            >
              <Button
                size="icon"
                type="button"
                variant="ghost"
                className="mr-2"
                onClick={toggleFieldType}
              >
                <FieldIcon size={24} />
              </Button>
            </Input>
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}

          {!hideFormMessage && <FormMessage />}
        </FormItem>
      )}
    />
  );
};
