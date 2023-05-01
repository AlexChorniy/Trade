import {Button, Form, Title} from './Counter.styles';
import {SyntheticEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount, selectCount} from "../../redux/reducers/counterSlice";

const Counter = () => {
    const [amount, setAmount] = useState<number>(0);

    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    const onChangeIncrement = () => {
        dispatch(increment());
    };

    const onChangeIncrementByAmount = (event: SyntheticEvent) => {
        event.preventDefault();

        if (amount) {
            dispatch(incrementByAmount(amount));
        }
    };

    const onChangeDecrement = (event: SyntheticEvent) => {
        event.preventDefault();
        dispatch(decrement());
    };

    const onChangeAmount = (event: SyntheticEvent) => {
        const value = (event.target as HTMLInputElement).value;

        if (Number(value)) setAmount(+value);
    };

    return (
        <Form>
            <Title>Counter</Title>
            <div>{count}</div>
            <input type="button" value="Increment" onClick={onChangeIncrement}/>
            <button onClick={onChangeDecrement}>Decrement</button>
            <Button onClick={onChangeIncrementByAmount}>{`Add amount ${amount}`}</Button>
            <input type="number" value={amount} onChange={onChangeAmount}/>
        </Form>
    );
};

export default Counter;
