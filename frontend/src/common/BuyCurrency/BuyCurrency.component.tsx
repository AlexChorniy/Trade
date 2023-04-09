import { Container, Title } from './BuyCurrency.styles';
import { Input } from '../../styles/common.styles';
import { SyntheticEvent } from 'react';

type TBuyCurrency = {
  onClickHandler: (event: SyntheticEvent) => void;
};

const BuyCurrencyComponent = ({ onClickHandler }: TBuyCurrency) => {
  const onChangeHandler = (event: SyntheticEvent) => {
    console.log(event);
  };
  return (
    <Container>
      <Title>BuyCurrency</Title>
      <Input type='text' placehollder='currency' onChange={onChangeHandler} />
      <Input type='text' placehollder='amount' onChange={onChangeHandler} />
      <Input type='button' value='Buy' onClick={onClickHandler} />
    </Container>
  );
};

export default BuyCurrencyComponent;