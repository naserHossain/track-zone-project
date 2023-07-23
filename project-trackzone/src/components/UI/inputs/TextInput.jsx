import styled from "styled-components";

const TextInput = styled.input`
    width: 100%;
    border: ${(props) =>
        props.error ? "1px solid #fc4e4e" : "1px solid #efefef"};
    outline: none;
    padding: 0.25rem 0.5rem;
    background: transparent;
    font-size: 0.9rem;
    color: #333;
    font-family: Arial, Helvetica, sans-serif;
    &:focus {
        border: 1px solid skyblue;
    }
`;
export default TextInput;
