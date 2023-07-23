import styled from "styled-components";

const fontSizes = {
    sm: "0.8rem",
    md: "1rem",
    lg: "1.2rem",
};
const lineHeights = {
    sm: "1.2rem",
    md: "1.3rem",
    lg: "1.4rem",
};
const Label = styled.label`
    color: #333;
    font-family: Arial;
    font-size: ${(props) => fontSizes[props.size] ?? "1rem"};
    line-height: ${(props) => lineHeights[props.line] ?? "1.2rem"};
    user-select: none;
`;
export default Label;
