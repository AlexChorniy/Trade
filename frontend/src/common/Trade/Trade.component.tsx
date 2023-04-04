import { useEffect, useState } from 'react';
import { Trade } from '../../models/trade';
import { Input, List, ListItem, Section, Text, Title } from './Trade.styles';

const TradeComponent = () => {
  const [trades, setTrades] = useState<Trade[]>([]);

  useEffect(() => {
    setTrades((prevState) => [...prevState, { currency: 'USD', amount: 10 }]);
  }, []);

  return (
    <Section>
      <Title>Your Trades</Title>
      <List>
        {trades.map(({ currency, amount }) => (
          <ListItem>
            <Text>{currency}</Text>:<Text>{amount}</Text>
          </ListItem>
        ))}
      </List>

      <Input type="button" value="Open Trade" />
    </Section>
  );
};

export default TradeComponent;
