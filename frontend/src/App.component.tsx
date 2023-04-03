import { StrictMode } from "react";
import { Wrapper } from "./App.styles";
import { createGlobalStyle } from "styled-components";
import HeaderComponent from "./components/Header/Header.component";
import MainComponent from "./components/Main/Main.component";
import FooterComponent from "./components/Footer/Footer.component";

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
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </Wrapper>
    </StrictMode>
  );
}

export default AppComponent;
