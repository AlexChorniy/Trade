import Main from './components/Main';
import React, { useRef } from 'react';
import Modal from './common/Modal';
import 'normalize.css';
import { GlobalStyle } from './styles/global.styles';
import BuyCurrency from './common/BuyCurrency';
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
      <Main onOpenModalHandler={openModal} />
      <Modal ref={modalRef}>
        <BuyCurrency onClickHandler={closeModal} />
      </Modal>
    </React.Fragment>
  );
}

export default AppComponent;
