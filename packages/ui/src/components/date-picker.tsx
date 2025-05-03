'use client';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@workspace/ui/components/popover';

import * as React from 'react';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@workspace/ui/lib/utils';
import { Button } from '@workspace/ui/components/button';
import { Calendar } from '@workspace/ui/components/calendar';
import type { DayPickerSingleProps } from 'react-day-picker';
import { toIsoDateString } from '@workspace/shared/utils/date/to-iso-date-string';

export interface DatePickerProps
  extends Omit<React.ComponentProps<'button'>, 'onChange' | 'value'> {
  value?: Date;
  disabled?: boolean;
  placeholder?: string;
  onChange?: DayPickerSingleProps['onSelect'];
}

export function DatePicker({
  value,
  onChange,
  disabled,
  className,
  placeholder,
  ...rest
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          {...rest}
          disabled={disabled}
          variant="outline"
          className={cn(
            'w-full justify-start text-left font-normal',
            !value && 'text-muted-foreground',
            className,
          )}
        >
          <CalendarIcon aria-hidden />
          {value ? toIsoDateString(value) : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          initialFocus
          mode="single"
          selected={value}
          disabled={disabled}
          onSelect={onChange}
        />
      </PopoverContent>
    </Popover>
  );
}
