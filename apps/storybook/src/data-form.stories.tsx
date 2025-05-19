import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@workspace/ui/components/button";
import { DataForm } from "@workspace/presentation/components/form/data-form";
import { TextField } from "@workspace/presentation/components/form/text-field";
import { SelectField } from "@workspace/presentation/components/form/select-field";
import { CheckboxField } from "@workspace/presentation/components/form/checkbox-field";
import { PasswordField } from "@workspace/presentation/components/form/password-field";

const GENDER_OPTIONS = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Others", value: "others" },
];

const defaultSchema = z.object({
  username: z.string().email(),
  password: z.string().min(8),
  remember: z.boolean().default(false),
  gender: z.enum(["male", "female", "others"]).default("male"),
});

const Component = (props: Partial<React.ComponentProps<typeof DataForm>>) => {
  const form = useForm({
    mode: "onChange",
    resolver: zodResolver(defaultSchema),
  });

  return (
    <DataForm form={form} {...props} onValid={console.log}>
      <TextField name="username" label="Username" autoComplete="username" />

      <PasswordField
        name="password"
        label="Password"
        autoComplete="new-password"
      />

      <SelectField
        name="gender"
        label="Gender"
        placeholder="Select your gender"
        options={GENDER_OPTIONS}
        className="w-full"
      />

      <CheckboxField name="remember" label="Remember me" />

      <Button type="submit" disabled={!form.formState.isValid}>
        Submit
      </Button>
    </DataForm>
  );
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Presentation/DataForm",
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
  render: Component,
};
