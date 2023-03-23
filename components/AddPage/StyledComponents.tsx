import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export const Divider = styled.hr`
  margin: 2rem 0;
`;

export const FormGroup = styled.div`
  padding: 0.5rem 1.7rem;
  margin: 0.5rem;
  display: flex;
  align-items: center;
`;

export const ButtonGroup = styled.div`
  margin-top: 1.5rem;
  padding: 1rem 1.7rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button:nth-child(even) {
    margin-left: 1rem;
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  display: block;
  padding-right: 1rem;
`;

export const Input = styled.input`
  height: 1.8rem;
  width: 100%;
  display: block;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.7rem 0rem 1.7rem;
`;
