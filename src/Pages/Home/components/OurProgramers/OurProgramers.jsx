import React from 'react'
import { OurProgramersWrapper, P, Span, TabsWrapper, Title } from './Style'
import Tabs from './Tabs'

function OurProgramers() {
  return (
    <div className='container'>
      <OurProgramersWrapper>     
          <div>
            <Title><Span>our</Span> programers</Title>
            <P>Include every Bootstrap JavaScript plugin and dependency with one of our two bundles.</P>
          </div>
          <TabsWrapper>
            <Tabs />
          </TabsWrapper>
      </OurProgramersWrapper>
    </div>
  )
}

export default OurProgramers