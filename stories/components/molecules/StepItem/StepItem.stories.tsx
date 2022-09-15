import { Meta } from '@storybook/react';
import StepItem, { StepItemProps } from '../../../../components/molecules/StepItem/index';

export default {
  title: 'Components/Molecules/StepItem',
  component: StepItem,
} as Meta;

const Template = (args: StepItemProps) => <StepItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: '1. Start',
  icon: '/icon/icon-1.png',
  desc1: 'Pilih salah satu game',
  desc2: 'Game yang ingin kamu topup',
};
