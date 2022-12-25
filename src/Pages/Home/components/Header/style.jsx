import styled from "@emotion/styled";
import theme from "../../../../design-system/Config";
import header from '../../../../design-system/shared/assets/OurProgramers/imags/intro-bg.jpg'

export const HeaderWrapper = styled('section')  `
    label:HeaderWrapper;
    height: 700px;
    background: url(${header}) fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20% 0;
    text-align: center;
`
export const H3 = styled('h3') `
    label: H3;
    font-size: 1.5rem;
    color: ${theme.white};

`
export const H1 = styled('h1') `
    label: H1;
    font-size: 2.5rem;
    color: ${theme.white};

`
export const Learn = styled('button') `
    label: Learn;
    font-size: 1rem;
    background-color: ${theme.white};
    color: ${theme.primary};
    border: 1px solid ${theme.white};
    cursor: pointer;
    padding: 10px;
    transition: .5s;
    margin: 15px;
    :hover{ 
    background-color: inherit;
    color: ${theme.white};
    }
`
export const Register = styled('button') `
    label: Register;
    cursor: pointer;
    border: 1px solid ${theme.white};
    font-size: 1rem;
    color: ${theme.white};
    background-color: ${theme.primary};
    margin: 15px;
    padding: 10px;
    transition: .5s;
    :hover{    
    background-color: inherit;
    color: ${theme.primary};
    }
`