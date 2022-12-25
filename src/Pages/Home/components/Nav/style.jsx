import styled from "@emotion/styled";
import theme  from '../../../../design-system/Config'

export const NavbarWrapper = styled('section') `
    label: NavbarWrapper;
    background-color: ${theme.secondary};
    color: ${theme.white};
    padding: 1rem 0; 
    position: fixed;
    width: 100%;
    z-index: 1111;
`

export const NavContainer = styled('div') `
    label:NavContainer;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
export const NavTitle = styled('div') `
    label:NavTitle;
    font-size:1.5rem;
`
export const Event = styled('span') `
    label:Event;
    color: ${theme.primary};
`
export const Link = styled('a') `
    label:Link;
    color: ${theme.white};
    
    font-size: 1rem;
`
export const LinksWrapper = styled('div') `
    label: LinksWrapper;
    display: flex;
    gap: 2rem;

`