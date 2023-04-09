import { Container } from './Modal.styles';
import { forwardRef, ReactNode, SyntheticEvent, useImperativeHandle, useRef, useState } from 'react';
import { ImperativeModal } from '../../models/modal';

type TProps = {
  children?: ReactNode;
};

const ModalComponent = forwardRef<ImperativeModal, TProps>(({ children }: TProps, forwardedRef): JSX.Element | null => {

  const [display, setDisplay] = useState<boolean>(true);
  const modalContentRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(forwardedRef, (): any => {
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

  const onOutsideClickHandler = (event: SyntheticEvent): void => {
    if (modalContentRef.current?.contains(event.target as Node)) {
      return;
    }
    close();
  };

  if (display) {
    return (
      <Container onClick={onOutsideClickHandler}>
        <div ref={modalContentRef}>{children}</div>
      </Container>
    );
  }

  return null;
});

export default ModalComponent;
