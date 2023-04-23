import Main from './components/Main';
import React, {useRef} from 'react';
import Modal from './common/Modal';
import 'normalize.css';
import {GlobalStyle} from './styles/global.styles';
import Counter from './common/Counter';
import {ImperativeModal} from './models/modal';

function AppComponent(): JSX.Element {
    const modalRef = useRef<ImperativeModal | null>(null);

    const openModal = (): void => {
        if (modalRef.current) {
            modalRef.current?.openModal();
        }
    };

    // const closeModal = (): void => {
    //   if (modalRef.current) {
    //     modalRef.current?.closeModal();
    //   }
    // };

    // const onTradesHandler = (trade: Trade): void => {
    //   setTrades((prevState) => [...prevState, trade]);
    // };

    return (
        <React.StrictMode>
            <GlobalStyle/>
            <Main onOpenModalHandler={openModal}/>
            <Modal ref={modalRef}>
                {/*<BuyCurrency />*/}
                <Counter/>
            </Modal>
        </React.StrictMode>
    );
}

export default AppComponent;
