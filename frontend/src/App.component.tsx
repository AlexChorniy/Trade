import { createGlobalStyle } from 'styled-components';
import MainComponent from './components/Main/Main.component';
import { gridPx } from './utils/styleHelpers';

const GlobalStyle = createGlobalStyle`

  body {
    font-family: "Comic Sans MS", Arial, sans-serif;
    font-size: ${gridPx(14)};
  }
`;

function AppComponent(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <div>
        <MainComponent />
      </div>
    </>
  );
}

export default AppComponent;
