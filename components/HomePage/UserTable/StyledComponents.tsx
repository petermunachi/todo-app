import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  width: 95%;
  border: 0.8px solid black;
  padding: 2rem 1.5rem 0rem 1.5rem;

  td {
    padding: 1rem;
    padding-bottom: 0.4rem;
  }

  th {
    padding: 1rem;
    text-align: left;
    background-color: lightGray;
  }

  tr:nth-child(even) {
    border-top: 0.8px solid black;
    border-bottom: 0.8px solid black;
  }
`;
