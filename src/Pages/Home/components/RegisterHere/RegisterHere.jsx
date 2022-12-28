import React from 'react'
import { Button, Content, FormWrapper, Input, P, RegisterHereWrapper, Span, Text, Title } from './style'

function RegisterHere() {
  return (
    <RegisterHereWrapper>
        <Content className='container'>
            <div style={{width: "60%"}}>
                <Title>register <Span>here</Span></Title>
                <P>Include every Bootstrap JavaScript plugin with one of our two bundles, Include every Bootstrap .</P>
                <Text>
                Include every Bootstrap JavaScript plugin with one of our two bundles, Include every Bootstrap Include every Looking To Quickly Add Bootstrap To Your Project? Use JsDeliver, A Free Open Source CDN. Using A Package Manage. </Text>
            </div>
            <FormWrapper style={{width: "35%"}}>
                <Input type='text' placeholder='First Name' />
                <Input type='text' placeholder='Last Name' />
                <Input type='number' placeholder='Phone Number' />
                <Input type='email' placeholder='Email Address' />
                <Button>REGISTER</Button>
            </FormWrapper>
        </Content>
    </RegisterHereWrapper>
  )
}

export default RegisterHere