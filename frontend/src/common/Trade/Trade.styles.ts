import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid grey;
  padding: 5px;
  width: fit-content;
`;

export const Section = styled.section`
  padding: 10px;
  border: 1px solid dimgrey;
  width: 150px;
`;

export const Title = styled.h5`
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

export const Input = styled.input.attrs(({ type, value }: { type: string; value?: string }) => ({
  type: type || 'text',
  value: value || '',
}))`
  min-height: 20px;
  min-width: 30px;
  cursor: pointer;
  margin: 10px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  text-transform: capitalize;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  height: 150px;
  overflow-x: hidden;
`;

export const ListItem = styled.li`
  text-decoration: none;
  width: inherit;
`;

export const Text = styled.strong`
  display: inline-block;
  text-transform: uppercase;

  &:nth-child(2) {
    margin-left: 5px;
  }
`;
