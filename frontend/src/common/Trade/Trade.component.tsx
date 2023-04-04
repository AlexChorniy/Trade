import { SyntheticEvent, useEffect, useState } from 'react';
import { Trade } from '../../models/trade';
import { Input, List, ListItem, Section, Text, Title } from './Trade.styles';

const TradeComponent = () => {
  const [trades, setTrades] = useState<Trade[]>([]);

  useEffect(() => {
    setTrades((prevState) => [...prevState, { currency: 'USD', amount: 10 }]);
  }, []);

  const onClickHandler = (event: SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
  };

  return (
    <Section>
      <Title>Your Trades</Title>
      <List>
        {trades.map(({ currency, amount }, index) => (
          <ListItem key={index}>
            <Text>{currency}</Text>
            <Text>{amount}</Text>
          </ListItem>
        ))}
      </List>

      <Input type="button" value="open trade" onClick={onClickHandler} />
    </Section>
  );
};

export default TradeComponent;
