import styled from "@emotion/styled"
import theme from "../../../../design-system/Config"

export const AccordionWrapper = styled('section') `
label: AccordionWrapper;
padding: 4rem 0 2rem 0;
text-align: center;
`
export const Title = styled('h4') `
    label: Title;
    color: ${theme.primary};
    font-size: 1.8rem;
    margin: 0;
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