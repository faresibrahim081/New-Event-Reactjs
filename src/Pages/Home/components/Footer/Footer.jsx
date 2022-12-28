import { faDribbble, faFacebookF, faGithub, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { FooterWrapper, Li, P, Span, Ul } from './style'

function Footer() {
  return (
    <FooterWrapper>
        <div className='container'>
            <P> copyright &#xf1f9; 2022 designed by: <Span>fares el3rakey</Span></P>
            <div>
                <Ul>
                    <Li><FontAwesomeIcon icon={faFacebookF} /></Li>
                    <Li><FontAwesomeIcon icon={faTwitter} /></Li>
                    <Li><FontAwesomeIcon icon={faDribbble} /></Li>
                    <Li><FontAwesomeIcon icon={faGoogle} /></Li>
                    <Li><FontAwesomeIcon icon={faGithub} /></Li>
                </Ul>
            </div>
        </div>
        
    </FooterWrapper>
  )
}

export default Footer