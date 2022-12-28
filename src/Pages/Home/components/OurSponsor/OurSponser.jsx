import React from 'react'
import ourSponsorsData from '../../../../design-system/components/OurSponsors/Data'
import OurSponsors from '../../../../design-system/components/OurSponsors/OurSponsors'
import {  OurSponsorWrapper, P, Span, Sponsors, Title } from './Style'

function OurSponsor() {
  return (
    <OurSponsorWrapper>     
          <div className='container'>
            <Title><Span>our</Span> sponsors</Title>
            <P>Include every Bootstrap JavaScript plugin and dependency with one of our two bundles.</P>
            <Sponsors>
              {ourSponsorsData.map(item => {
                return(
                  <OurSponsors key={item.id} src={item.src} alt={item.alt} />
                )
              })}
            </Sponsors>
          </div>
      </OurSponsorWrapper>
  )
}

export default OurSponsor