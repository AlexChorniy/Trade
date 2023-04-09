import { SyntheticEvent } from 'react';
import { Trade } from '../../models/trade';
import { List, ListItem, Section, Text, Title } from './Trade.styles';
import { uuid } from '../../utils/commonHelpers';
import { Input } from '../../styles/common.styles';

type TTrade = {
  onClickHandler: (event: SyntheticEvent) => void;
  trades: Trade[];
}

const TradeComponent = ({ onClickHandler, trades }: TTrade) => {
  return (
    <Section>
      <Title>Your Trades</Title>
      <List>
        {trades.map(({ currency, amount }) => (
          <ListItem key={uuid()}>
            <Text>{currency}</Text>
            <Text>{amount}</Text>
          </ListItem>
        ))}
      </List>

      <Input type='button' value='open trade' onClick={onClickHandler} />
    </Section>
  );
};

export default TradeComponent;
