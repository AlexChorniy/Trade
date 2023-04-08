import { Container } from './Modal.styles';
import { forwardRef, ReactNode, useImperativeHandle, useState } from 'react';
import { ImperativeModal } from '../../models/modal';

type TProps = {
  children?: ReactNode;
};

const ModalComponent = forwardRef<ImperativeModal, TProps>(({ children }: TProps, forwardedRef): JSX.Element | null => {

  const [display, setDisplay] = useState<boolean>(true);

  useImperativeHandle(forwardedRef, (): ImperativeModal => {
    return {
      openModal: (): void => open(),
      closeModal: (): void => close(),
    };
  });

  const open = (): void => {
    setDisplay(true);
  };

  const close = (): void => {
    setDisplay(false);
  };

  if (display) {
    return (
      <Container onClick={close} ref={forwardedRef}>
        {children}
      </Container>
    );
  }

  return null;
});

export default ModalComponent;
