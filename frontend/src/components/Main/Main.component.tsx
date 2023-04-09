import { Main } from './Main.styles';
import TradeComponent from '../../common/Trade';
import { SyntheticEvent } from 'react';


type TMainComponent = {
  onOpenModalHandler: (event: SyntheticEvent) => void
}

function MainComponent({ onOpenModalHandler }: TMainComponent): JSX.Element {
  return (
    <Main>
      <TradeComponent onClickHandler={onOpenModalHandler} />
    </Main>
  );
}

export default MainComponent;
