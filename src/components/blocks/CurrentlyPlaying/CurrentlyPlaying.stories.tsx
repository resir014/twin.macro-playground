import React from 'react'
import { Story, Meta } from '@storybook/react'

import CurrentlyPlaying, { CurrentlyPlayingProps } from './CurrentlyPlaying'

export default {
  title: 'Player/Currently Playing',
  component: CurrentlyPlaying,
  argTypes: {
    title: {
      control: 'text'
    },
    artist: {
      control: 'text'
    },
    album: {
      control: 'text'
    },
    albumArt: {
      control: 'text'
    }
  }
} as Meta<CurrentlyPlayingProps>

const Template: Story<CurrentlyPlayingProps> = args => <CurrentlyPlaying {...args} />

export const Example = Template.bind({})
Example.args = {
  title: 'Fall For The Team',
  artist: 'Jukio Kallio & Daniel Hagström',
  album: 'Fall Guys Original Soundtrack',
  albumArt: 'https://f4.bcbits.com/img/a1074507161_10.jpg'
}
