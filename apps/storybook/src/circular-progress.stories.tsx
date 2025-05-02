import type { Meta } from '@storybook/react';
import { CircularProgress } from '@workspace/ui/components/circular-progress';

const Story: Meta<typeof CircularProgress> = {
  component: CircularProgress,
  title: 'Design System/CircularProgress',
};

export default Story;

export const Primary = {
  args: {} as React.ComponentProps<typeof CircularProgress>,
};
