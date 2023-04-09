import { Main } from './Main.styles';
import TradeComponent from '../../common/Trade';
import { SyntheticEvent } from 'react';
import { Trade } from '../../models/trade';


type TMainComponent = {
  onOpenModalHandler: (event: SyntheticEvent) => void;
  trades: Trade[];
}

function MainComponent({ onOpenModalHandler, trades }: TMainComponent): JSX.Element {
  return (
    <Main>
      <TradeComponent onClickHandler={onOpenModalHandler} trades={trades} />
    </Main>
  );
}

export default MainComponent;
