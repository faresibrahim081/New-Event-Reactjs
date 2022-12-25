import styled from "@emotion/styled";
import theme from "../../../../design-system/Config";

export const OurProgramersWrapper = styled('section') `
label: OurProgramersWrapper;
padding: 4rem 0 2rem 0;
`
export const Title = styled('h4') `
    label: Title;
    color: ${theme.primary};
    font-size: 2rem;
`
export const Span = styled('span') `
    label: Span;
    color: ${theme.black};
`
export const P = styled('p') `
    label: P;
    font-weight: 600;
    color: ${theme.gray};
`
export const TabsWrapper = styled('div') `
    label: TabsWrapper;
    /* padding-top: 1rem; */
`
export const Wrapper = styled('div') `
    label: Wrapper;
    display: flex;
    gap: 2rem;
    font-size: 1.2rem;
    color: ${theme.black};
`
export const TabsLink = styled('span') `
    label: TabsLink;
    font-weight: 600;
    cursor: pointer;
    padding: 2rem 0;
`
export const Line = styled('div') `
    label: Line;
    font-weight: 600;
    background-color: ${theme.black};
    width: 80%;
    height: 1px;
    margin: 0 0 2rem 0;
    
`