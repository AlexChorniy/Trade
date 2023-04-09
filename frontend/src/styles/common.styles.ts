import styled from 'styled-components';
import { gridPx } from '../utils/styleHelpers';

export const Input = styled.input`
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
