import styled from 'styled-components';
import {gridPx} from '../../utils/styleHelpers';
import {colorViolet1, colorWhite1} from '../../styles/additionalColors';

export const Main = styled.main`
  background-color: ${colorWhite1};
  min-height: 100vh;
  color: ${colorViolet1};
  padding: ${gridPx(10)};
`;