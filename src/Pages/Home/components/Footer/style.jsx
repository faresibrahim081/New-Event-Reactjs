import styled from "@emotion/styled";
import theme from "../../../../design-system/Config";


export const FooterWrapper = styled('footer') `
    label: FooterWrapper;
    padding: 1rem 0 3rem 0;
    text-align: center;
`
export const P = styled('p') `
    label: P;
    font-size: 1rem;
    color: ${theme.gray};
`
export const Span = styled('span') `
    label: Span;
    color: ${theme.primary};
    font-weight: bold;
`
export const Ul = styled('ul') `
    label: Ul;
    color: ${theme.gray};
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-top: 2rem;
    transition: 0.5s;
`
export const Li = styled('li') `
    label: Li;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    :hover{
        background-color: ${theme.primary};
        color: ${theme.white};
    }
`