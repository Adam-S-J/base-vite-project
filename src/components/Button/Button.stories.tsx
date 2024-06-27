import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const placeholderFunc = (): void => {
  return;
};

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button label="Button" onClick={placeholderFunc} />,
};
