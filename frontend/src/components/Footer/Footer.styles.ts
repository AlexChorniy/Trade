import styled from 'styled-components';
import {gridPx} from '../../utils/styleHelpers';
import {colorViolet1, colorWhite1} from '../../styles/additionalColors';

export const Footer = styled.footer`
  height: ${gridPx(100)};
  color: ${colorWhite1};
  padding: ${gridPx(10)};
  background-color: ${colorViolet1};
`;
