import {SyntheticEvent} from 'react';
import {List, ListItem, Section, Text, Title} from './Trade.styles';
import {Input} from '../../styles/common.styles';
import {useSelector} from "react-redux";
import {selectTrades} from "../../redux/reducers/tradesSlice";

type TTrade = {
    onClickHandler: (event: SyntheticEvent) => void;
};

const ListElements = (): JSX.Element => {

    const trades = useSelector(selectTrades);

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
