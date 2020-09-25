import * as React from 'react'
import tw from 'twin.macro'

import Page from 'components/layout/Page'
import Navigation from 'components/layout/Navigation'
import Content from 'components/layout/Content'
import { CurrentlyPlaying } from 'components/blocks/CurrentlyPlaying'

const album = {
  title: 'Fall For The Team',
  artist: 'Jukio Kallio & Daniel Hagström',
  album: 'Fall Guys Original Soundtrack',
  albumArt: 'https://f4.bcbits.com/img/a1074507161_10.jpg'
}

const IndexPage = () => (
  <Page>
    <Navigation />
    <Content>
      <h1 css={tw`text-2xl mb-4`}>Hello world.</h1>
      <CurrentlyPlaying {...album} />
    </Content>
  </Page>
)

export default IndexPage
