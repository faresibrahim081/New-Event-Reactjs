import styled from "@emotion/styled";
import contact from "images/OurProgramers/imags/contact-bg.jpg"
import theme from "../../../../design-system/Config";


export const ContactWrapper = styled('section') `
    label: ContactWrapper;
    margin: 5rem 0 2rem 0;
    height: 500px;
    background: url(${contact}) fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 4rem 0 0rem 5rem;
`
export const Wrapper = styled('div') `
    label: Wrapper;
    display: flex;
    padding: 0 4rem;
`

export const Content = styled('div') `
    label: Content;
    width: 60%;
    margin: 0;
`
export const Title = styled('h4') `
    label: Title;
    color: ${theme.primary};
    font-size: 2rem;
`
export const P = styled('p') `
    label: P;
    font-size: 0.9rem;
    color: ${theme.gray};
    width: 80%;
    margin-bottom: 1rem;
`
export const Button = styled('button') `
    label: Button;
    cursor: pointer;
    border: 1.5px solid ${theme.white};
    font-size: 1rem;
    border-radius: 25px;
    color: ${theme.white};
    background-color: ${theme.primary};
    width: 200px;
    margin: 15px;
    padding: 10px;
    
    transition: .5s;
    :hover{    
    background-color: ${theme.gray};;
    color: ${theme.white};
    }
`
export const Form = styled('div') `
    label: Form;
    width: 32%;
    background-color: ${theme.white};
    border-radius: 25px;
    padding: 1rem 1rem;
`
export const Input = styled('input') `
    label: Input;
    width: 100%;
    margin: 10px 0;
    padding: 5px;
    border: none;
    border-bottom: 1.5px solid ${theme.gray};
    font-size: 15px;
  &:focus{
    outline: none;
  }
`
export const Textarea = styled('input') `
    label: Textarea;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: none;
    border-bottom: 1.5px solid ${theme.gray};
    font-size: 15px;
    height: 60px;
  &:focus{
    outline: none;
  }
`
export const Button2 = styled('button') `
    label: Button2;
    cursor: pointer;
    border: 1.5px solid ${theme.white};
    font-size: 1rem;
    border-radius: 25px;
    color: ${theme.white};
    background-color: ${theme.gray};
    width: 130px;
    margin: 15px;
    padding: 10px;
    
    transition: .5s;
    :hover{    
    background-color: ${theme.primary};;
    color: ${theme.white};
    }
`