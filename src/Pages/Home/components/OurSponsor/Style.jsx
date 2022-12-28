import styled from "@emotion/styled";
import theme from "../../../../design-system/Config";

export const OurSponsorWrapper = styled('section') `
label: OurSponsorWrapper;
    padding: 0 0 2rem 0;
    text-align: center;
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
`
export const Sponsors = styled('div') `
    label: Sponsors;
    display: flex;
    justify-content: center;
    gap: 1rem;
`