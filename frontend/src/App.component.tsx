import Main from './components/Main';
import React, { useRef, useState } from 'react';
import Modal from './common/Modal';
import 'normalize.css';
import { GlobalStyle } from './styles/global.styles';
import BuyCurrency from './common/BuyCurrency';
import { ImperativeModal } from './models/modal';
import { Trade } from './models/trade';

function AppComponent(): JSX.Element {
  const [trades, setTrades] = useState<Trade[]>([]);
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
      <Main onOpenModalHandler={openModal} trades={trades} />
      <Modal ref={modalRef}>
        <BuyCurrency onClickHandler={closeModal}
                     setTrade={(trade) => setTrades((prevState) => [...prevState, trade])} />
      </Modal>
    </React.Fragment>
  );
}

export default AppComponent;
