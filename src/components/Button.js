import styled from "styled-components";

const Button = styled.button`
  background: palevioletred;
  color: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #af5a76;
  }
`;
export default Button;
