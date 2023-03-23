import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;

  @media only screen and (max-width: 600px) {
    padding: 1rem 0;
  }
`;

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow-x:auto;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`;

export const Divider = styled.hr`
  margin: 2rem 0;

  @media only screen and (max-width: 600px) {
    margin: 1.5rem 0;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0rem 2rem;

  @media only screen and (max-width: 600px) {
    padding: 0 1rem 0rem 1rem;
  }
`;
