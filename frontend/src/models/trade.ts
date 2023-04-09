import { SyntheticEvent } from 'react';

export interface Trade {
  amount: number;
  currency: string;
}

export type InputRef = HTMLInputElement;

export type InputType = {
  type: string;
  value?: string;
  ref?: InputRef;
  onClick?: (event: SyntheticEvent) => void;
  onChange?: (event: SyntheticEvent) => void;
  placeholder: string;
};
