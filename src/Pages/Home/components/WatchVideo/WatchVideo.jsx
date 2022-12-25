
import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { WatchVideoWrapper, Div, P, Title, Div2 } from './Style'

function WatchVideo() {
    
        // const video = useNavigate();
    
    
  return (
    <div className='container'>
        <WatchVideoWrapper>
            <Div>
                <Title>
                    watch video
                </Title>
                <P>
                Looking to quickly add Bootstrap to your project? Use jsDeliver, a free open source CDN. Using a package manager or need to download the source files?    
                </P>
                <P>
                    
                    Include every Bootstrap JavaScript plugin and dependency with one of our two bundles. Both bootstrap.bundle.js and bootstrap.bundle.min.js include Popper for our tooltips and popovers.
                </P>
            </Div>
            <Div2>
                <iframe src='https://www.youtube.com/embed/XDPwXQjAlB0' title="khaled ebn elwalid"  
                width='100%'
                height='350px'
                ></iframe>
            </Div2>
        </WatchVideoWrapper>
    </div>
  )
}

export default WatchVideo