import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background-color: #4fc8a6 ;
  letter-spacing: 0.2rem;
  width: 65%;
  height: 3rem;
  opacity: 0.83;
  border: none;
  color: black;
  font-weight: bold;
  border-radius: 2rem;
  cursor: pointer;
`;
