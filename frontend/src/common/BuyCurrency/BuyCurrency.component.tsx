import { Form, Title } from './BuyCurrency.styles';
import { Input } from '../../styles/common.styles';
import { SyntheticEvent, useState } from 'react';
// import { useDispatch } from 'react-redux';

const BuyCurrencyComponent = () => {
  const [currency, setCurrency] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  // const dispatch = useDispatch();

  const onChangeCurrency = (event: SyntheticEvent) => {
    const value = (event.target as HTMLInputElement).value;
    setCurrency(value);
  };

  const onChangeAmount = (event: SyntheticEvent) => {
    const value = (event.target as HTMLInputElement).value;
    setAmount(value);
  };

  const onSubmitHandler = () => {
    if (currency && (+amount === 0 || +amount)) {
      // setTrade({ currency, amount: +amount });
      // dispatch();
    }
  };
  return (
    <Form>
      <Title>BuyCurrency</Title>
      <Input type="text" value={currency} name="fCurrency" placehollder="currency" onChange={onChangeCurrency} />
      <Input type="number" value={amount} name="fAmount" placehollder="amount" onChange={onChangeAmount} />
      <Input type="button" value="Buy" onClick={onSubmitHandler} />
    </Form>
  );
};

export default BuyCurrencyComponent;
