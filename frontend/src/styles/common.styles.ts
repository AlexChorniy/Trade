import styled from 'styled-components';
import { gridPx } from '../utils/styleHelpers';
import { InputType } from '../models/trade';
import { SyntheticEvent } from 'react';

export const Input = styled.input.attrs(({ type, value, ref, onClick, onChange, placeholder }: InputType) => ({
  type: type || 'text',
  value: value || '',
  ref,
  onClick: (event: SyntheticEvent) => onClick && event && onClick(event),
  onChange: (event: SyntheticEvent) => onChange && event && onChange(event),
  placeholder,
}))<HTMLInputElement>`
  min-height: ${gridPx(20)};
  min-width: ${gridPx(30)};
  cursor: pointer;
  margin: ${gridPx(10)} auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${gridPx(3)};
  text-transform: capitalize;
`;
