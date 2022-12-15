import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Disc, Overviewapper, Title } from './Styled';

function Overview({icon,title,disc}) {
  return (
    <Overviewapper>
       <div> <FontAwesomeIcon size='2x' color='#f2545f' icon={icon} /> </div>
       <Title>{title}</Title>
       <Disc>{disc}</Disc>
    </Overviewapper>
  )
}

export default Overview;
