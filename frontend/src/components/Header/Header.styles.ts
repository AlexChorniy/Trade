import styled from 'styled-components';
import {gridPx} from '../../utils/styleHelpers';
import {colorOrange1, colorViolet1} from '../../styles/additionalColors';

export const Header = styled.header`
  height: ${gridPx(50)};
  background-color: ${colorOrange1};
  color: ${colorViolet1};
  padding: ${gridPx(10)};
`;
