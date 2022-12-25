
import React from 'react'
import { Programers, Image, ImageWrapper, IconWrapper, Title, Name, Desc } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

function OurProgramers({img ,time ,roomNum ,job ,alt , name, desc}) {
  return (
    <Programers>
      <ImageWrapper>
        <Image src={img} alt={alt} />
      </ImageWrapper>
      <div>
        <IconWrapper>
          <div>
            <FontAwesomeIcon style={{paddingRight : "0.4rem"}} size="ms" icon={faClock} /> {time}
          </div>
          <div>
            <FontAwesomeIcon style={{paddingRight : "0.4rem"}} size="ms" icon={faMapMarker} /> {roomNum}
          </div>
        </IconWrapper>
        <Title>{job}</Title>
        <Name>{name}</Name>
        <Desc>{desc}</Desc>
      </div>
    </Programers>
  )
}

export default OurProgramers;
