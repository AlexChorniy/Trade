import MainComponent from './components/Main/Main.component';
import { useRef, useState } from 'react';
import ModalComponent from './common/Modal/Modal.component';
import 'normalize.css';
import { GlobalStyle } from './styles/global.styles';

function AppComponent(): JSX.Element {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const modalRef = useRef(null);

  return (
    <>
      <GlobalStyle />
      <MainComponent />
      {toggleModal && (
        <ModalComponent onClickHandler={() => setToggleModal((prevState) => !prevState)} ref={modalRef.current} />
      )}
    </>
  );
}

export default AppComponent;
