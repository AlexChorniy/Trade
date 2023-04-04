import styled from 'styled-components';
import { gridPx } from '../../utils/styleHelpers';

export const Form = styled.form`
  border: ${gridPx(1)} solid grey;
  padding: ${gridPx(5)};
  width: fit-content;
`;

export const Section = styled.section`
  padding: ${gridPx(10)};
  border: ${gridPx(1)} solid dimgrey;
  width: ${gridPx(150)};
`;

export const Title = styled.h5`
  margin: ${gridPx(5)};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
`;

export const Input = styled.input.attrs(({ type, value }: { type: string; value?: string }) => ({
  type: type || 'text',
  value: value || '',
}))`
  min-height: ${gridPx(20)};
  min-width: ${gridPx(30)};
  cursor: pointer;
  margin: ${gridPx(10)} auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${gridPx(3)};
  text-transform: capitalize;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  height: ${gridPx(150)};
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
    margin-left: ${gridPx(5)};
  }
`;
