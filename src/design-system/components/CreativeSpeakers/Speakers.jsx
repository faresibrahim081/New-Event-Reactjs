
import React from 'react';
import { SpeakersWrapper } from './Styled';

function Speakers({img, name, job, alt}) {
    return (
        <SpeakersWrapper>
            <img src={img} alt={alt} width="100%" />
            <h2>{name}</h2>
            <span>{job}</span>
        </SpeakersWrapper>
    );
};
export default Speakers;