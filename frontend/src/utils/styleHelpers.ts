const gridSize = 8;
const defaultGridSize = 8;

export const gridPx = (size = defaultGridSize): string => {
  return `${((size * gridSize) / defaultGridSize).toFixed(2)}px`;
};

export const fontSizeStandard = (add = 0): string => `${add + 14}px`;