import '@workspace/ui/globals.css';

import React from 'react';
import { MemoryRouter } from 'react-router';
import type { Preview, Decorator } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const routerDecorator: Decorator = (Story) => (
  <MemoryRouter initialEntries={['/']}>
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  </MemoryRouter>
);

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    docs: {
      toc: true,
    },
  },
  decorators: [routerDecorator],
};

export default preview;
