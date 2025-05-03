import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  useFormField,
  FormDescription,
} from '@workspace/ui/components/form';

import { Dropzone } from '@workspace/ui/components/dropzone';

export interface DropzoneFieldProps
  extends React.ComponentProps<typeof Dropzone> {
  name: string;
  hideStatus?: boolean;
  label?: React.ReactNode;
  showFormMessage?: boolean;
  description?: React.ReactNode;
}

export const DropzoneField = ({
  name,
  label,
  className,
  hideStatus,
  description,
  placeholder,
  showFormMessage = true,
  ...rest
}: DropzoneFieldProps) => {
  const formField = useFormField();

  return (
    <FormField
      name={name}
      control={formField.control}
      render={({ field, fieldState }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <Dropzone
              {...rest}
              value={field.value}
              placeholder={placeholder}
              data-hide-status={hideStatus}
              onFilesDropped={field.onChange}
              data-is-error={Boolean(fieldState.error)}
              className={
                'data-[is-error=true]:border-error data-[is-error=true]:text-error'
              }
            />
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}

          {showFormMessage && <FormMessage />}
        </FormItem>
      )}
    />
  );
};
