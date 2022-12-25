
import React from 'react'
import Slider from './Slider'
import { CreativeSpeakersWrapper, P, SliderWrapper, Span, Title } from './Style'

function CreativeSpeakersComponent() {
  return (
    <CreativeSpeakersWrapper>
        <div className='container'>
            <Title><Span>creative</Span> speaker</Title>
            <P>Include every Bootstrap JavaScript plugin and dependency with one of our two bundles.</P>
        </div>
        <SliderWrapper>
            <Slider />
        </SliderWrapper>
    </CreativeSpeakersWrapper>
  )
}

export default CreativeSpeakersComponent