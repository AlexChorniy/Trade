import { Trade } from './trade';

export interface RootState {
  trades: Trade[];
}

export enum ActionType {
  OpenTrade = 'OPEN_TRADE',
  AddTrade = 'ADD_TRADE',
}
