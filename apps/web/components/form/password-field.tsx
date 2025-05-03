import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  useFormField,
  FormDescription,
} from '@workspace/ui/components/form';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@workspace/ui/lib/utils';
import { Input } from '@workspace/ui/components/input';
import { Button } from '@workspace/ui/components/button';

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

  const fieldType = showPassword ? 'text' : 'password';
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
          <FormControl>
            <Input
              type={fieldType}
              {...rest}
              onChange={field.onChange}
              placeholder={placeholder}
              value={field.value}
              className={cn('pr-11', label && 'pt-6 h-14 pb-1')}
            >
              {label && (
                <FormLabel className="absolute top-2 typography-btn-small">
                  {label}
                </FormLabel>
              )}

              <Button
                size="icon"
                type="button"
                variant="ghost"
                onClick={toggleFieldType}
                className="h-auto absolute right-2 top-0 bottom-0"
              >
                {<FieldIcon size={24} />}
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
