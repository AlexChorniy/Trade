import { StrictMode } from 'react';
import { Wrapper } from './App.styles';
import { createGlobalStyle } from 'styled-components';
import MainComponent from './components/Main/Main.component';

const GlobalStyle = createGlobalStyle`

  body {
    font-family: "Comic Sans MS", Arial, sans-serif;
    font-size: 14px;
  }
`;

function AppComponent(): JSX.Element {
  return (
    <StrictMode>
      <GlobalStyle />
      <Wrapper>
        <MainComponent />
      </Wrapper>
    </StrictMode>
  );
}

export default AppComponent;
