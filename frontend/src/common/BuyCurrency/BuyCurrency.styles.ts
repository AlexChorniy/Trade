import styled from 'styled-components';
import { colorGrey1 } from '../../styles/additional.colors';
import { gridPx } from '../../utils/styleHelpers';

export const Container = styled.div`
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

export const Title = styled.h5``;