import styled from "@emotion/styled";
import theme from "../../Config";

export const Programers = styled('div')`
    label: Programers;
    margin: 30px;
    display: flex;
    align-items: center;
    gap: 3rem;
`

export const ImageWrapper = styled('div')`
    label: ImageWrapper;
    padding: 1.4rem 0;
`

export const Image = styled('img')`
    label: img;
    border-radius: 50%;
    width: 100%;
`
export const IconWrapper = styled('div')`
    label: IconWrapper;
    display: flex;
    gap: 2rem;
    color: ${theme.gray};

`
export const Title = styled('h2')`
    label: Title;
    color: ${theme.gray};
    margin: 0.5rem 0;
`
export const Name = styled('span')`
    label: Name;
    font-size: 1.2rem;
    color: ${theme.gray};
    padding: 0.5rem 0;
`
export const Desc = styled('p')`
    label: Desc;
    color: ${theme.gray};
    line-height: 1.6;
`