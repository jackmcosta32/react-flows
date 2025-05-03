import { cn } from '@workspace/ui/lib/utils';
import type { Meta, StoryObj } from '@storybook/react';

interface FontVariant {
  size: number;
  weight: number;
  variant: string;
  className?: string;
  children: React.ReactNode;
}

const LAUSANNE_VARIANTS = [
  { size: 48, weight: 350, children: 'Display 1', variant: 'typography-d1' },
  { size: 32, weight: 350, children: 'Display 2', variant: 'typography-d2' },
  { size: 24, weight: 500, children: 'Headline 1', variant: 'typography-h1' },
  { size: 20, weight: 500, children: 'Headline 2', variant: 'typography-h2' },
  { size: 18, weight: 300, children: 'Headline 3', variant: 'typography-h3' },
  { size: 16, weight: 500, children: 'Title', variant: 'typography-title' },
  { size: 16, weight: 300, children: 'Body', variant: 'typography-body' },
  {
    size: 14,
    weight: 400,
    children: 'Caption 1',
    variant: 'typography-caption1',
  },
  {
    size: 12,
    weight: 350,
    children: 'Caption 2',
    variant: 'typography-caption2',
  },
  {
    size: 10,
    weight: 300,
    children: 'Footnote',
    variant: 'typography-footnote',
  },
  {
    size: 16,
    weight: 350,
    children: 'Button Large',
    variant: 'typography-btn-large',
  },
  {
    size: 14,
    weight: 350,
    children: 'Button Medium',
    variant: 'typography-btn-medium',
  },
  {
    size: 12,
    weight: 350,
    children: 'Button Small',
    variant: 'typography-btn-small',
  },
] satisfies FontVariant[];

const TIEMPOS_VARIANTS = [
  {
    size: 20,
    weight: 350,
    children: 'Headline 2',
    variant: 'typography-h2',
    className: '!font-normal',
  },
  {
    size: 16,
    weight: 350,
    children: 'Title',
    variant: 'typography-title',
    className: 'italic !font-normal',
  },
] satisfies FontVariant[];

const SF_VARIANTS = [
  {
    size: 14,
    weight: 350,
    children: 'Text Symbols',
    variant: 'typography-caption1',
  },
] satisfies FontVariant[];

interface TypographyProps {
  title: React.ReactNode;
  fontVariants: FontVariant[];
  fontFamily: 'font-sans' | 'font-serif' | 'font-mono';
}

const Typography = ({ fontFamily, fontVariants, title }: TypographyProps) => (
  <>
    <table className="table-auto m-4">
      <thead className="text-left">
        <tr className="w-full border-border border-b">
          <th
            colSpan={4}
            className={cn(
              'px-4 py-4 flex flex-row items-center typography-d1',
              fontFamily,
            )}
          >
            {title}
          </th>
        </tr>

        <tr>
          <th className="py-2 px-4 w-full">Style</th>
          <th className="py-2 px-4">Weight</th>
          <th className="py-2 px-4">Size</th>
        </tr>
      </thead>
      <tbody>
        {fontVariants.map(({ size, weight, children, variant, className }) => (
          <tr className="border-b border-border py-4">
            <td className={cn('px-4', variant, fontFamily, className)}>
              {children}
            </td>
            <td className="px-4">{weight}</td>
            <td className="px-4">{size}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

const Component = () => (
  <>
    <Typography
      fontFamily="font-sans"
      title="Lausanne"
      fontVariants={LAUSANNE_VARIANTS}
    />
    <Typography
      fontFamily="font-serif"
      title="Tiempos Headline"
      fontVariants={TIEMPOS_VARIANTS}
    />
    <Typography
      fontFamily="font-mono"
      title="SF PRO"
      fontVariants={SF_VARIANTS}
    />
  </>
);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Design System/Typography',
  component: Component,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    fontFamily: {
      control: 'select',
      options: ['font-sans', 'font-serif', 'font-mono'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: { fontFamily: 'font-sans' },
  render: Component,
};
