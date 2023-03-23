import styled from 'styled-components';

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

export const FormInputError = styled.span`
  display: block;
  color: red;
  padding-left: 2rem;
  text-align: left;
`;
