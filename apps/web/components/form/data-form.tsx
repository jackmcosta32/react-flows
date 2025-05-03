import type {
  FieldValues,
  UseFormReturn,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form';
import { cn } from '@workspace/ui/lib/utils';
import { Form } from '@workspace/ui/components/form';

export interface DataFormProps<TFormValues extends FieldValues>
  extends Omit<
    React.ComponentPropsWithoutRef<'form'>,
    'onSubmit' | 'onInvalid'
  > {
  form: UseFormReturn<TFormValues>;
  onValid: SubmitHandler<TFormValues>;
  onInvalid?: SubmitErrorHandler<TFormValues>;
}

export function DataForm<TFormValues extends FieldValues>({
  form,
  onValid,
  children,
  onInvalid,
  className,
}: DataFormProps<TFormValues>) {
  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onValid, onInvalid)}
        className={cn('flex flex-col gap-4', className)}
      >
        {children}
      </form>
    </Form>
  );
}
