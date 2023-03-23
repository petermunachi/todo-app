import styled from 'styled-components';

interface ButtonContainerI {
  bgColor: string;
  borderColor: string;
  color: string;
}

export const ButtonContainer = styled.button<ButtonContainerI>`
  background-color: ${(props) => props.bgColor};
  border: none;
  color: ${(props) => props.color};
  padding: 0.5rem 1.1rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  cursor: pointer;
  border: 1px solid;
  border-color: ${(props) => props.borderColor};
  border-radius: 0.4rem;
`;
