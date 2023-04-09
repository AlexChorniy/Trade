import { Form, Title } from './BuyCurrency.styles';
import { Input } from '../../styles/common.styles';
import { SyntheticEvent, useState } from 'react';
import { Trade } from '../../models/trade';

type TBuyCurrency = {
  onClickHandler: (event?: SyntheticEvent) => void;
  setTrade: (trade: Trade) => void;
};

const BuyCurrencyComponent = ({ onClickHandler, setTrade }: TBuyCurrency) => {
  const [currency, setCurrency] = useState<string>('');
  const [amount, setAmount] = useState<number>();

  const onChangeCurrency = (event: SyntheticEvent) => {
    const value = (event.target as HTMLInputElement).value;
    setCurrency(value);
  };

  const onChangeAmount = (event: SyntheticEvent) => {
    const value = (event.target as HTMLInputElement).value;
    setAmount(Number(value));
  };

  const onSubmitHandler = () => {
    if (currency && amount) {
      setTrade({ currency, amount });
      onClickHandler();
    }
  };
  return (
    <Form>
      <Title>BuyCurrency</Title>
      <Input type='text' value={currency} name='fCurrency' placehollder='currency' onChange={onChangeCurrency} />
      <Input type='number' value={amount} name='fAmount' placehollder='amount' onChange={onChangeAmount} />
      <Input type='button' value='Buy' onClick={onSubmitHandler} />
    </Form>
  );
};

export default BuyCurrencyComponent;