import styled from "@emotion/styled";
import theme from "../../../../../design-system/Config";

export const Wrapper = styled('div') `
    label: Wrapper;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const AccordionWrapper = styled('div') `
    label: AccordionWrapper;
    width: 70%;
`
export const Item = styled('div') `
    label: Item;
    margin-bottom: 10px;
    box-shadow: 0px 4px 6px -4px ${theme.gray};
`
export const Title = styled('div') `
    label: Title;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background-color: ${theme.whiteSmoke};
    padding: 0 1rem;
    border-radius: 6px;
`
export const H3 = styled('h3') `
    label: H3;
    font-size: 1rem;
    color: ${theme.black};
`
export const Content = styled('div') `
    label: Content;
    padding: 0 0.5rem;
    max-height: 0;
    overflow: hidden;
    transition: 0.7s all cubic-bezier(0, 1, 0, 1);
  &.show{
    height: auto;
    max-height: 9999px;
    transition: 0.7s all cubic-bezier(1, 0, 1, 0);
  }
`
export const P = styled('p') `
    label: P;
    padding: 0 0 0.5rem 0;
    color: ${theme.gray};
    font-size: 0.9rem;
`

