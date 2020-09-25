import * as React from 'react'
import tw from 'twin.macro'

import Page from 'components/layout/Page'
import Navigation from 'components/layout/Navigation'
import Content from 'components/layout/Content'
import { InputLabel, InputText, InputTextarea } from 'components/ui/Forms'
import { Button } from 'components/ui/Button'

const IndexPage = () => (
  <Page>
    <Navigation />
    <Content>
      <h1 css={tw`text-2xl mb-4`}>Contact.</h1>
      <div>
        <div css={tw`mb-3 last:mb-0`}>
          <InputLabel>Full Name</InputLabel>
          <InputText css={tw`block w-full`} />
        </div>
        <div css={tw`mb-3 last:mb-0`}>
          <InputLabel>Email Address</InputLabel>
          <InputText css={tw`block w-full`} />
        </div>
        <div css={tw`mb-3 last:mb-0`}>
          <InputLabel>Message</InputLabel>
          <InputTextarea css={tw`block w-full`} />
        </div>
        <div css={tw`mb-3 last:mb-0`}>
          <Button variant="primary">Submit</Button>
        </div>
      </div>
    </Content>
  </Page>
)

export default IndexPage
