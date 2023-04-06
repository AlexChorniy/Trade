import { Container } from './Modal.styles';
import { Input } from '../../styles/common.styles';
import { forwardRef, ReactNode, SyntheticEvent } from 'react';

type TProps = {
  children?: ReactNode;
  inputName?: string;
  onClickHandler: (event: SyntheticEvent) => void;
};

const ModalComponent = forwardRef(({ children, inputName, onClickHandler }: TProps, ref): JSX.Element => {
  return (
    <Container onClick={onClickHandler}>
      {children}
      <Input type="button" value={inputName || 'Buy'} ref={ref} onClick={onClickHandler} />
    </Container>
  );
});

export default ModalComponent;
