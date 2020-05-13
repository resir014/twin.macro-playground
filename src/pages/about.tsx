import * as React from 'react'
import {} from '@emotion/core'
import tw from 'twin.macro'
import Link from 'next/link'

import Page from 'components/Page'
import Navigation from 'components/Navigation'
import Content from 'components/Content'

export default () => (
  <Page title="About | Next.js TypeScript Quickstart">
    <Navigation />
    <Content>
      <h1 className="title">About us.</h1>
      <p>
        Perge porro; Igitur ne dolorem quidem. Omnes enim iucundum motum, quo sensus hilaretur. Nam, ut sint illa vendibiliora, haec
        uberiora certe sunt. Ad corpus diceres pertinere-, sed ea, quae dixi, ad corpusne refers?
      </p>
      <p>
        <Link href="/" passHref>
          <a css={tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>Return home</a>
        </Link>
      </p>
    </Content>
    <style jsx>{`
      .title {
        margin-top: 0;
      }
    `}</style>
  </Page>
)
