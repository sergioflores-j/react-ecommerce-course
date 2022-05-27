import { Story, Meta } from '@storybook/react/types-6-0';
import { Email } from '@styled-icons/material-outlined';
import TextField, { TextFieldProps } from '.';

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    disabled: false,
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' },
  },
} as Meta;

export const Default: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const WithIcon: Story = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

WithIcon.args = {
  icon: <Email />,
};

export const WithError: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

WithError.args = {
  error: 'Ops...something is wrong',
};
