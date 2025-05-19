import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  useFormField,
  FormDescription,
} from '@workspace/ui/components/form';

import { cn } from '@workspace/ui/lib/utils';
import { Checkbox } from '@workspace/ui/components/checkbox';

export interface CheckboxFieldProps
  extends React.ComponentPropsWithRef<typeof Checkbox> {
  name: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
}

export const CheckboxField = ({
  name,
  label,
  className,
  defaultValue,
  description,
  ...rest
}: CheckboxFieldProps) => {
  const formField = useFormField();

  return (
    <FormField
      name={name}
      control={formField.control}
      render={({ field }) => (
        <FormItem>
          <div className={cn('flex flex-row items-center gap-2', className)}>
            <FormControl>
              <Checkbox
                {...rest}
                onCheckedChange={field.onChange}
                checked={field.value ?? defaultValue}
              />
            </FormControl>

            <div className="flex flex-col gap-2 justify-center">
              {label && (
                <FormLabel className="typography-caption2">{label}</FormLabel>
              )}

              {description && <FormDescription>{description}</FormDescription>}
            </div>
          </div>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
