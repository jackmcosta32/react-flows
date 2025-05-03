import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  useFormField,
  FormDescription,
} from "@workspace/ui/components/form";

import { Input } from "@workspace/ui/components/input";
import { CheckIcon, OctagonAlertIcon } from "lucide-react";

export interface TextFieldProps extends React.ComponentProps<typeof Input> {
  name: string;
  hideStatus?: boolean;
  label?: React.ReactNode;
  description?: React.ReactNode;
  showFormMessage?: boolean;
}

export const TextField = ({
  name,
  label,
  children,
  className,
  hideStatus,
  description,
  placeholder,
  showFormMessage = true,
  ...rest
}: TextFieldProps) => {
  const formField = useFormField();

  return (
    <FormField
      name={name}
      control={formField.control}
      render={({ field, fieldState }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <Input
              {...rest}
              value={field.value ?? ""}
              onChange={field.onChange}
              placeholder={placeholder}
            >
              {fieldState.isDirty && !hideStatus && (
                <span className="size-9 flex items-center justify-center rounded-md mr-2">
                  {fieldState.invalid ? (
                    <OctagonAlertIcon size={14} />
                  ) : (
                    <CheckIcon size={14} />
                  )}
                </span>
              )}

              {children}
            </Input>
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}

          {showFormMessage && <FormMessage />}
        </FormItem>
      )}
    />
  );
};
