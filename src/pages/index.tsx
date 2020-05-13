import * as React from 'react'
import tw from 'twin.macro'

import Page from 'components/Page'
import Navigation from 'components/Navigation'
import Content from 'components/Content'
import { InputLabel, InputText, InputTextarea } from 'components/ui/Forms'

export default () => (
  <Page>
    <Navigation />
    <Content>
      <h1 css={tw`text-2xl mb-4`}>Hello world.</h1>
      <div>
        <div css={tw`mb-3 last:mb-0`}>
          <InputLabel>Full Name</InputLabel>
          <InputText css={tw`block w-full`} />
        </div>
        <div css={tw`mb-3 last:mb-0`}>
          <InputLabel>Address</InputLabel>
          <InputTextarea css={tw`block w-full`} />
        </div>
      </div>
    </Content>
  </Page>
)
