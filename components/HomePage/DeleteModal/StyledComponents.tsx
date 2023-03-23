import styled from 'styled-components';

export const Container = styled.div`
  width: 25rem;

  @media only screen and (max-width: 600px) {
   width: 100%;
  }
`;

export const Divider = styled.hr`
  margin: 1rem 0;
`;

export const ButtonGroup = styled.div`
  padding: 0.7rem 0 0.7rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button:nth-child(even) {
    margin-left: 1rem;
  }
`;
