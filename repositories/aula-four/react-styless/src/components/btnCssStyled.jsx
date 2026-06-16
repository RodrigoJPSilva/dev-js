import styled from "styled-components"

const StyledButton = styled.button`
    background-color: ${(props) => (props.secondary ? "yellow" : "orange")};
    color: blue;
    border: 10px;
    padding: ${(props) => (props.large ? "10px" : "0")};
`

export default function ButtonStyled ({secondary, text, large}) {
    return (
        <StyledButton secondary={secondary} large={large}>
            {text}
        </StyledButton>
    )
}