import about from '../../../../design-system/shared/assets/OurProgramers/imags/overview-img.jpg'
import React from 'react'
import { AboutUsWrapper, Div, P, Span } from './Style'

function AboutUs() {
  return (
    <div className='container'>
        <AboutUsWrapper>
            <Div>
                <Span>
                    new event is a fully responsive web site which made by me it was a conference;
                 </Span>
                <P>
                Looking to quickly add Bootstrap to your project? Use jsDeliver, a free open source CDN. Using a package manager or need to download the source files?    
                </P>
                <P>
                    
                    Include every Bootstrap JavaScript plugin and dependency with one of our two bundles. Both bootstrap.bundle.js and bootstrap.bundle.min.js include Popper for our tooltips and popovers.
                </P>
            </Div>
            <div>
                <img width='100%' src={about} alt='about' />
            </div>
        </AboutUsWrapper>
    </div>
  )
}

export default AboutUs