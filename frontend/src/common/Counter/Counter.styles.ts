import styled from 'styled-components';
import {colorGrey1} from '../../styles/additional.colors';
import {gridPx} from '../../utils/styleHelpers';

export const Form = styled.form`
  background-color: ${colorGrey1};
  width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  padding: 0 ${gridPx(20)} ${gridPx(20)};
`;

export const Button = styled.div`
  min-width: ${gridPx(80)};
  height: ${gridPx(20)};
  border-radius: ${gridPx(5)};
  background-color: #afeaaf;
  padding: ${gridPx(5)};
  margin-top: ${gridPx(5)};
  margin-bottom: ${gridPx(5)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h5``;