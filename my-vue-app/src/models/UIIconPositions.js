export const ICON_POSITIONS = {
  RIGHT: 'right',
};

export const ICON_POSITION_VALIDATOR = (value) => {
  return Object.values(ICON_POSITIONS).includes(value);
};
