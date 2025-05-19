import { useMemo, useState } from "react";
import {
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  useFormField,
  FormDescription,
} from "@workspace/ui/components/form";

import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
  MultipleSelectValue,
} from "@workspace/ui/components/select";
import { cn } from "@workspace/ui/lib/utils";

type IOptionValuePrimitive = string | number | boolean | undefined;

export type IOption = {
  label: React.ReactNode;
  value: IOptionValuePrimitive;
};

export type SelectFieldProps = React.ComponentProps<typeof Select> &
  Omit<
    React.HTMLAttributes<HTMLButtonElement>,
    "defaultValue" | "dir" | "value"
  > & {
    name: string;
    options?: IOption[];
    placeholder?: string;
    label?: React.ReactNode;
    description?: React.ReactNode;
  } & (
    | {
        multiple: true;
        value?: IOptionValuePrimitive[];
      }
    | {
        multiple?: false;
        value?: IOptionValuePrimitive;
      }
  );

const renderLabel = (params: {
  multiple?: boolean;
  placeholder?: React.ReactNode;
  optionsMap?: Record<string, IOption>;
  selectedValuesSet?: Set<IOptionValuePrimitive>;
}) => {
  const { multiple, placeholder, optionsMap, selectedValuesSet } = params ?? {};

  if (!multiple) return <SelectValue placeholder={placeholder} />;

  if (!selectedValuesSet?.size || !optionsMap) return placeholder;

  const selectedValues = Array.from(selectedValuesSet);

  const activeLabels = selectedValues.reduce((acc, selectedValue) => {
    const parsedSelectValue = String(selectedValue);
    const selectedOption = optionsMap[parsedSelectValue];

    if (selectedOption) {
      acc.push(
        <MultipleSelectValue key={parsedSelectValue}>
          {selectedOption.label}
        </MultipleSelectValue>
      );
    }

    return acc;
  }, [] as React.ReactNode[]);

  return activeLabels;
};

const renderOptions = (params: {
  multiple?: boolean;
  options?: IOption[];
  selectedValuesSet?: Set<IOptionValuePrimitive>;
}) => {
  const { selectedValuesSet, options, multiple } = params ?? {};

  if (!Array.isArray(options) || !options.length) return null;

  const renderedOptions = options.map(({ label, value }) => {
    const isActive = selectedValuesSet?.has(value);

    return (
      <SelectItem
        isActive={isActive}
        key={String(value)}
        multiple={multiple}
        value={value as never}
      >
        {label}
      </SelectItem>
    );
  });

  return renderedOptions;
};

export const SelectField = ({
  name,
  label,
  options,
  multiple,
  className,
  placeholder,
  description,
  ...rest
}: SelectFieldProps) => {
  const formField = useFormField();
  const [selectedValuesSet, setSelectedValuesSet] =
    useState<Set<IOptionValuePrimitive>>();

  const handleOnValueChange = (
    value: string,
    onChange: (...event: unknown[]) => void
  ) => {
    if (typeof onChange !== "function") return;

    const nextSelectedValuesSet = selectedValuesSet ?? new Set();

    if (nextSelectedValuesSet.has(value)) {
      nextSelectedValuesSet.delete(value);
    } else {
      nextSelectedValuesSet.add(value);
    }

    setSelectedValuesSet(nextSelectedValuesSet);

    return onChange(multiple ? Array.from(nextSelectedValuesSet) : value);
  };

  const memoizedOptionsMap = useMemo(() => {
    if (!Array.isArray(options) || !options.length) return;

    const optionsMap = options.reduce(
      (acc, option) => {
        const parsedValue = String(option.value);

        acc[parsedValue] = option;

        return acc;
      },
      {} as Record<string, IOption>
    );

    return optionsMap;
  }, [options]);

  return (
    <FormField
      name={name}
      control={formField.control}
      render={({ field }) => (
        <FormItem className={className}>
          {label && <FormLabel>{label}</FormLabel>}

          <Select
            {...rest}
            {...((multiple ? { value: null } : {}) as any)}
            defaultValue={field.value}
            onValueChange={(value) =>
              handleOnValueChange(value, field.onChange)
            }
          >
            <FormControl>
              <SelectTrigger className="w-full">
                <span className="!flex flex-row gap-2">
                  {renderLabel({
                    multiple,
                    placeholder,
                    selectedValuesSet,
                    optionsMap: memoizedOptionsMap,
                  })}
                </span>
              </SelectTrigger>
            </FormControl>

            <SelectContent>
              {renderOptions({
                options,
                multiple,
                selectedValuesSet,
              })}
            </SelectContent>
          </Select>

          {description && <FormDescription>{description}</FormDescription>}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
