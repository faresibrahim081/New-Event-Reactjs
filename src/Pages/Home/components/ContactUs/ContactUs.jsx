import React from 'react'
import { Span } from '../OurProgramers/Style'
import { Button, Button2, ContactWrapper, Content, Form, Input, P, Textarea, Title, Wrapper } from './Style'

function ContactUs() {
  return (
    <ContactWrapper>
        <Wrapper className='container'>
            <Content>
            <Title><Span>New</Span> event</Title>
            <P>Include every Bootstrap JavaScript plugin and dependency with one of our two bundles your personal dashboard, where you can find an introduction to how GitHub.</P>
            <P>Include every Bootstrap JavaScript plugin and dependency with one of our two bundles your personal dashboard, where you can find an introduction to how GitHub.</P>
            <P>Include every Bootstrap JavaScript plugin and dependency with one of our two bundles your personal dashboard, where you can find an introduction to how GitHub.</P>
            <Button>Download Now</Button>
            </Content>
            <Form>
                <Title><Span>keep in</Span> touch</Title>
                <Input type='text' placeholder='Name' />
                <Input type='email' placeholder='Email' />
                <Textarea placeholder='Message'></Textarea>
                <Button2>Send</Button2>
            </Form>
        </Wrapper>
    </ContactWrapper>
  )
}

export default ContactUs