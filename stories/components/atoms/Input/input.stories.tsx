import { Meta } from '@storybook/react';
import Input from '../../../../components/atoms/Input/index.tsx';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
} as Meta;

const Template = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: 'Nama Lengkap',
  placeholder: 'Enter your name',
};
