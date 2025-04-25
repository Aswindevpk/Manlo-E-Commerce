import styled, { css } from "styled-components";

const Heading = styled.h1<{ as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6", center?: boolean }>`
    ${(props) => props.as === "h1" && css`
        font-size: 3rem;
        font-weight:600;
    `}
    ${(props) => props.as === "h2" && css`
        font-size: 2.4rem;
        font-weight:700;
    `}
    ${(props) => props.as === "h3" && css`
        font-size: 2rem;
        font-weight:600;
    `}
    ${(props) => props.as === "h4" && css`
        font-size: 1.6rem;
        font-weight:600;
    `}
    ${(props) => props.as === "h5" && css`
        font-size: 1.2rem;
        font-weight:600;
    `}
    ${(props) => props.as === "h6" && css`
        font-size: 1rem;
        font-weight:600;
    `}
    ${(props)=>props.center && css`
        text-align: center;
    `}
    color:var(--color-brand-900);
    line-height:1.4;
`

export default Heading;
