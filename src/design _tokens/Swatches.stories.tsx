import type { Meta, StoryObj } from '@storybook/react-vite';

import SwatchList from './SwatchList';

const meta = {
  title: 'Design Tokens/Swatches',
  component: SwatchList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },

} satisfies Meta<typeof SwatchList>;

export default meta;
type Story = StoryObj<typeof SwatchList>;

export const Swatches: Story = {
  
}
