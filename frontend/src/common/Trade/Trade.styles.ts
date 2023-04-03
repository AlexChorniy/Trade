import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid grey;
  padding: 5px;
  width: fit-content;
`;

export const Section = styled.section`
  padding: 10px;
`;

export const Title = styled.h5`
  margin: 5px;
`;

export const Input = styled.input.attrs(({ type }: { type: string }) => ({
  type: type || 'text',
}))`
  height: 10px;
`;
