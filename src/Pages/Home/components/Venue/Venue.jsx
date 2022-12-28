import React from 'react'
import { venueData } from './data'
import { P, Span, Title, VenueWrapper } from './Style'

function Venue() {
  return (
    <VenueWrapper>
        <div className='container'>
            <Title>venue</Title>
            <P>Include every Bootstrap JavaScript plugin with one of our two bundles, Include every BootstrapInclude every Bootstrap JavaScript plugin with one of our two bundles, Include every Bootstrap .</P>
            {venueData.map((item, i) => {
                return(
                    <div key={i}>
                        <Span>{item.name}</Span>
                        <Span>{item.address},</Span>
                        <Span>{item.address2}</Span>
                        <Span>Tel: {item.tel}</Span>
                    </div>
                )
            })}
        </div>
    </VenueWrapper>
  )
}

export default Venue