import { createGlobalStyle } from 'styled-components';
import { fontSizeStandard } from '../utils/styleHelpers';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Comic Sans MS", Arial, sans-serif;
    font-size: ${fontSizeStandard()};
  }
`;
