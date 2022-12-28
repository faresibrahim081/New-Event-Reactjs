import React from 'react'
import AccordionComponent from './Accordion/Accordion'
import { AccordionWrapper, P, Span, Title } from './Style'

function Accordion() {
  return (
    <div className='container'>
      <AccordionWrapper>     
            <div>
              <Title><Span>do you have</Span> question ?</Title>
              <P>Include every Bootstrap JavaScript plugin and dependency with one of our two bundles.</P>
            </div>
        </AccordionWrapper>
        <AccordionComponent/>
      </div>
  )
}

export default Accordion