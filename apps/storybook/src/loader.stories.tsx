import type { Meta } from '@storybook/react';
import { Loader } from '@workspace/ui/components/loader';

const Story: Meta<typeof Loader> = {
  component: Loader,
  title: 'Design System/Loader',
};

export default Story;

export const Primary = {
  args: {} as React.ComponentProps<typeof Loader>,
};
