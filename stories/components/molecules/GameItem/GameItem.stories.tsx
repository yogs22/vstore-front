import { Meta } from '@storybook/react';
import GameItem, { GameItemProps } from '../../../../components/molecules/GameItem/index.tsx';

export default {
  title: 'Components/Molecules/GameItem',
  component: GameItem,
} as Meta;

const Template = (args: GameItemProps) => <GameItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Mobile Legend',
  category: 'Mobile',
  src: '/img/Thumbnail-1.png',
};
