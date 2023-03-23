import styled from 'styled-components';

interface CardContainerI {
  width: string;
}

export const CardContainer = styled.div<CardContainerI>`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width: ${(props) => props.width};
  border-radius: 5px;
  padding: 1.7rem 0;
`;
