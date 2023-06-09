import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { 
      control: 'select', options: ['primary', 'secondary', 'danger']
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    small: { control: 'boolean' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const MyButton = Template.bind({});
MyButton.args = {
  color: 'primary',
  disabled: false,
  small: false,
  loading: false
}
// More on args: https://storybook.js.org/docs/react/writing-stories/args

