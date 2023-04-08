import MainComponent from './components/Main/Main.component';
import React, { useRef } from 'react';
import ModalComponent from './common/Modal/Modal.component';
import 'normalize.css';
import { GlobalStyle } from './styles/global.styles';
import { ImperativeModal } from './models/modal';

function AppComponent(): JSX.Element {
  const modalRef = useRef<ImperativeModal>(null);

  const openModal = (): void => {
    if (modalRef.current !== null) {
      modalRef.current.openModal();
    }
  };

  const closeModal = (): void => {
    if (modalRef.current !== null) {
      modalRef.current.closeModal();
    }
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <MainComponent />
      <button onClick={openModal}>Open Modal</button>
      <ModalComponent ref={modalRef}>
        <div>
          <h6>Modal Header</h6>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      </ModalComponent>
    </React.Fragment>
  );
}

export default AppComponent;
