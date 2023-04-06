import { createGlobalStyle } from 'styled-components';
import MainComponent from './components/Main/Main.component';
import { fontSizeStandard } from './utils/styleHelpers';
// import ModalComponent from './common/Modal/Modal.component';
// import { useRef, useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Comic Sans MS", Arial, sans-serif;
    font-size: ${fontSizeStandard()};
  }
`;

function AppComponent(): JSX.Element {
  // const [toggleModal, setToggleModal] = useState<boolean>(true);
  // const modalRef = useRef(null);

  return (
    <>
      <GlobalStyle />
      <MainComponent />
      {/*{toggleModal && (*/}
      {/*  <ModalComponent onClickHandler={() => setToggleModal((prevState) => !prevState)} ref={modalRef.current} />*/}
      {/*)}*/}
    </>
  );
}

export default AppComponent;
