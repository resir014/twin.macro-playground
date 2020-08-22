import * as React from 'react'
import tw from 'twin.macro'

import Page from 'components/layout/Page'
import Navigation from 'components/layout/Navigation'
import Content from 'components/layout/Content'
import { InputLabel, InputText, InputTextarea } from 'components/ui/Forms'

const IndexPage = () => (
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

export default IndexPage
