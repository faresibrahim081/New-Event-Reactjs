import styled from "@emotion/styled";
import venue from "images/OurProgramers/imags/venue-bg.jpg"
import theme from "../../../../design-system/Config";


export const VenueWrapper = styled('section') `
    label: VenueWrapper;
    margin: 5rem 0;
    height: 500px;
    background: url(${venue}) fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 4rem 0 0rem 5rem;
`
export const Title = styled('h4') `
    label: Title;
    color: ${theme.primary};
    font-size: 2rem;
`
export const P = styled('p') `
    label: P;
    font-size: 1rem;
    color: ${theme.gray};
    width: 50%;
    margin-bottom: 3rem;
`
export const Span = styled('span') `
    label: Span;
    display: block;
    font-weight: 600;
    font-size: 1rem;
    margin: 5px;
    color: ${theme.secondary};
`