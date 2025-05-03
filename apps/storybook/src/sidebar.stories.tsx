import type { Meta, StoryObj } from '@storybook/react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from '@workspace/ui/components/sidebar';

const AppSidebar = () => (
  <Sidebar>
    <SidebarHeader />
    <SidebarContent>
      <SidebarGroup />
      <SidebarGroup />
    </SidebarContent>
    <SidebarFooter />
  </Sidebar>
);

const Component = () => (
  <SidebarProvider>
    <AppSidebar />
    <main>
      <SidebarTrigger />
    </main>
  </SidebarProvider>
);

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Design System/Sidebar',
  component: Sidebar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {},
  render: Component,
};
