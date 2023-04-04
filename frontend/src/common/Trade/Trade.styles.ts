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

export const Input = styled.input.attrs(({ type, value }: { type: string; value?: string }) => ({
  type: type || 'text',
  value: value || '',
}))`
  height: 20px;
  cursor: pointer;
  box-sizing: content-box;
  margin-top: 10px;
`;

export const List = styled.ul`
  height: 15px;
  background-color: orange;
  list-style-type: none;
  list-style-position: outside;
`;

export const ListItem = styled.li`
  text-decoration: none;
`;

export const Text = styled.strong`
  &:nth-child(2) {
    margin-left: 5px;
  }
`;
