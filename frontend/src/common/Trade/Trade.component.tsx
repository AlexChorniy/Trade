import {SyntheticEvent} from 'react';
import {List, ListItem, Section, Text, Title} from './Trade.styles';
import {uuid} from '../../utils/commonHelpers';
import {Input} from '../../styles/common.styles';

type TTrade = {
    onClickHandler: (event: SyntheticEvent) => void;
};

const ListElements = (): JSX.Element => {
    const trades = [
        {id: uuid(), currency: 'wer', amount: 11},
        {id: uuid(), currency: 'wer2', amount: 12},
        {id: uuid(), currency: 'qwerty', amount: 15}
    ];
    return (
        <List>
            {trades.map(({currency, amount, id}) => (
                <ListItem key={id}>
                    <Text>{currency}</Text>
                    <Text>{amount}</Text>
                </ListItem>
            ))}
        </List>
    );
};

const TradeComponent = ({onClickHandler}: TTrade): JSX.Element => {
    return (
        <Section>
            <Title>Your Trades</Title>
            <ListElements/>
            <Input type='button' value='open trade' onClick={onClickHandler}/>
        </Section>
    );
};

export default TradeComponent;
