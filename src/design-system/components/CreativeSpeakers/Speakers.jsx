
import React from 'react';
import { H2, SpeakersWrapper } from './Styled';

function Speakers({img, name, job, alt}) {
    return (
        <SpeakersWrapper>
            <img src={img} alt={alt} width="100%" />
            <H2>{name}</H2>
            <span>{job}</span>
        </SpeakersWrapper>
    );
};
export default Speakers;