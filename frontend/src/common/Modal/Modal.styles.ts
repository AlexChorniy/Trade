import styled from 'styled-components';
import { gridPx } from '../../utils/styleHelpers';

export const Container = styled.div<HTMLDivElement>`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(243, 237, 234, 0.85);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: ${gridPx(20)}
`;
