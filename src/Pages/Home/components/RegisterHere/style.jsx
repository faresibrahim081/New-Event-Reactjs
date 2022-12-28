import styled from "@emotion/styled";
import Register from "images/OurProgramers/imags/register-bg.jpg"
import theme from "../../../../design-system/Config";

export const RegisterHereWrapper = styled('section') `
    label: RegisterHereWrapper;
    height: 400px;
    background: url(${Register}) fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 4rem 0 2rem 0;
`
export const Title = styled('h4') `
    label: Title;
    color: ${theme.primary};
    font-size: 2rem;
`
export const Span = styled('span') `
    label: Span;
    color: ${theme.white};
`
export const P = styled('p') `
    label: P;
    font-weight: 700;
    font-size: 1.3rem;
    letter-spacing: 2px;
    color: ${theme.white};
`
export const Text = styled('p') `
    label: Text;
    font-weight: 700;
    line-height: 1.6;
    color: ${theme.gray};
`
export const Content = styled('div') `
    label: Content;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const FormWrapper = styled('div') `
    label: FormWrapper;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const Input = styled('input') `
    label: Input;
    padding: 0.7rem;
    border-radius: 6px;
    border: 1px solid ${theme.white};
    background-color: transparent;
    color: ${theme.white};
    ::placeholder{
        font-size: 1rem;
    }
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
    background-color: inherit;
    color: ${theme.primary};
    }
`