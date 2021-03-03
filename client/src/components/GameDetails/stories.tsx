import { Story, Meta } from '@storybook/react/types-6-0';
import mockGameDetails from './mock';

import GameDetails, { GameDetailsProps } from '.';

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
  args: mockGameDetails,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac'],
      },
    },
    genres: {
      control: {
        type: 'inline-check',
        options: ['Role-playing', 'Narrative'],
      },
    },
    releaseDate: {
      control: {
        type: 'date',
      },
    },
  },
} as Meta;

export const Default: Story<GameDetailsProps> = args => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameDetails {...args} />
  </div>
);
